import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/** Scroll the whole page in steps so lazy images load and scroll-triggered reveals run. */
const scrollThrough = async (page: Page) => {
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = "auto";
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.7) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 300));
  });
};

const waitForVisibleImages = (page: Page) =>
  page.waitForFunction(() =>
    [...document.images]
      .filter((img) => {
        const r = img.getBoundingClientRect();
        return r.bottom > 0 && r.top < window.innerHeight && r.width > 0;
      })
      .every((img) => img.complete && img.naturalWidth > 0),
  );

// Google Maps runs in a cross-origin iframe and logs its own noise; only our page's errors count
const collectErrors = (page: Page) => {
  const errors: string[] = [];
  page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error" && !/google|gstatic/.test(msg.location().url)) errors.push(msg.text());
  });
  return errors;
};

test.describe("every device", () => {
  test("loads without errors or broken images", async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto("/");
    await scrollThrough(page);
    const broken = await page.evaluate(() =>
      [...document.images].filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.src),
    );
    expect(broken).toEqual([]);
    expect(errors).toEqual([]);
  });

  test("has no serious accessibility violations", async ({ page }) => {
    // Reduced motion shows all content immediately, so axe checks it at its final colours
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await scrollThrough(page);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .exclude("#location iframe")
      .analyze();
    const serious = results.violations
      .filter((v) => v.impact === "serious" || v.impact === "critical")
      .map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
    expect(serious).toEqual([]);
  });

  test("deep links land on the section, clear of the navbar", async ({ page }) => {
    await page.goto("/#menu");
    const heading = page.getByRole("heading", { name: "Menu highlights" });
    await expect(heading).toBeInViewport();
    const navBottom = await page
      .getByRole("navigation", { name: "Main" })
      .evaluate((nav) => nav.getBoundingClientRect().bottom);
    const headingTop = (await heading.boundingBox())!.y;
    expect(headingTop).toBeGreaterThan(navBottom);
  });

  test("shows open or closed status and callable phone links", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#top").getByText(/^(Open now|Closed)$/)).toBeVisible();
    const tel = page.locator('#hero-cta a[href^="tel:"]');
    await expect(tel).toHaveAttribute("href", "tel:+14162869334");
  });

  test("captures each section for visual review", async ({ page }, testInfo) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await scrollThrough(page);
    const sections = ["top", "menu", "about", "catering", "gallery", "testimonials", "location", "footer"];
    for (const [i, id] of sections.entries()) {
      await page.evaluate((id) => {
        const el = id === "footer" ? document.querySelector("footer") : document.getElementById(id);
        if (id === "top") window.scrollTo(0, 0);
        else el?.scrollIntoView({ block: "start" });
      }, id);
      await page.waitForTimeout(250);
      await waitForVisibleImages(page);
      await page.screenshot({ path: `test-results/screens/${testInfo.project.name}/${i}-${id}.png` });
    }
  });
});

test.describe("mobile", () => {
  test.skip(({ isMobile }) => !isMobile, "mobile only");

  test("never scrolls sideways, from 320px to 430px wide", async ({ page }) => {
    for (const width of [320, 360, 390, 430]) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/");
      await scrollThrough(page);
      // body clips horizontal overflow, which would hide a real problem; lift it to measure
      const overflow = await page.evaluate(() => {
        document.body.style.overflowX = "visible";
        const extra = document.documentElement.scrollWidth - window.innerWidth;
        const culprits = [...document.querySelectorAll("body *")]
          .filter((el) => el.getBoundingClientRect().right > window.innerWidth + 1)
          .filter((el) => !el.closest("section.overflow-hidden, #top, #menu"))
          .slice(0, 5)
          .map((el) => `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 40)}`);
        return { extra, culprits };
      });
      expect(overflow, `at ${width}px`).toEqual({ extra: 0, culprits: [] });
    }
  });

  test("tap targets are big enough", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await scrollThrough(page);
    const small = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLElement>("a[href], button")]
        .filter((el) => !el.closest("[aria-hidden='true'], .skip-to-content") && el.offsetParent !== null)
        .map((el) => {
          const r = el.getBoundingClientRect();
          // Links inside running text only need WCAG 2.2's 24px minimum; controls get 44px
          const inline = !!el.closest("p, address, footer li");
          const min = inline ? 24 : 44;
          return {
            label: el.getAttribute("aria-label") ?? el.textContent?.trim().slice(0, 30),
            w: r.width,
            h: r.height,
            min,
          };
        })
        .filter((t) => t.h < t.min || t.w < t.min)
        .map((t) => `${t.label} (${Math.round(t.w)}x${Math.round(t.h)}, needs ${t.min})`),
    );
    expect(small).toEqual([]);
  });

  test("menu opens, navigates and closes", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Open menu" });
    const menu = page.locator("#mobile-menu");

    await toggle.click();
    await expect(menu).toBeVisible();
    await menu.getByRole("link", { name: "Visit" }).click();
    await expect(menu).toBeHidden();
    await expect(page.getByRole("heading", { name: "Visit us" })).toBeInViewport();

    // Escape closes it
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(menu).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();

    // Tapping the dimmed page outside the card closes it
    await page.getByRole("button", { name: "Open menu" }).click();
    const viewport = page.viewportSize()!;
    await page.mouse.click(viewport.width / 2, viewport.height - 30);
    await expect(menu).toBeHidden();
  });

  test("call bar waits until the hero call button scrolls away", async ({ page }) => {
    await page.goto("/");
    // Matched by text: while hidden the bar is aria-hidden, which role queries skip
    const call = page.locator('a[href^="tel:"]').getByText("Call to order", { exact: true });
    await page.waitForTimeout(700);
    await expect(call).not.toBeInViewport();

    await page.evaluate(() => document.getElementById("menu")!.scrollIntoView());
    await expect(call).toBeInViewport();
    await expect(page.locator('a[href="tel:+14162869334"]', { hasText: /^Call to order$/ })).toHaveCount(1);
  });

  test("photo viewer opens, steps and closes", async ({ page }) => {
    await page.goto("/#gallery");
    await page.locator("#gallery li button").first().click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("1 / 12");
    await dialog.getByRole("button", { name: "Next photo" }).click();
    await expect(dialog).toContainText("2 / 12");
    await dialog.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
  });
});

test.describe("desktop", () => {
  test.skip(({ isMobile }) => isMobile, "desktop only");

  /** Which link the sliding indicator is currently under. */
  const indicatorLink = (page: Page) =>
    page.evaluate(() => {
      const indicator = document.querySelector<HTMLElement>("nav ul li[aria-hidden]")!;
      const left = parseFloat(indicator.style.left);
      return [...document.querySelectorAll<HTMLElement>("nav ul a")].find(
        (a) => Math.abs(a.parentElement!.offsetLeft - left) < 2,
      )?.textContent;
    });

  test("nav indicator goes straight to a clicked section instead of chasing each one", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(800);
    const nav = page.getByRole("navigation", { name: "Main" });
    await nav.getByRole("link", { name: "Visit" }).click();

    const seen = new Set<string | undefined>();
    for (let i = 0; i < 15; i++) {
      seen.add(await indicatorLink(page));
      await page.waitForTimeout(100);
    }
    expect([...seen]).toEqual(["Visit"]);
    await expect(nav.getByRole("link", { name: "Visit" })).toHaveAttribute("aria-current", "location");

    // Clicking back up while the pointer drifts away still holds the destination
    await nav.getByRole("link", { name: "Menu" }).click();
    await page.mouse.move(700, 600);
    seen.clear();
    for (let i = 0; i < 15; i++) {
      seen.add(await indicatorLink(page));
      await page.waitForTimeout(100);
    }
    expect([...seen]).toEqual(["Menu"]);
  });

  test("nav indicator follows hover and returns to the active section", async ({ page }) => {
    await page.goto("/#catering");
    const nav = page.getByRole("navigation", { name: "Main" });
    await expect(nav.getByRole("link", { name: "Catering", exact: true })).toHaveAttribute(
      "aria-current",
      "location",
    );
    await nav.getByRole("link", { name: "Reviews" }).hover();
    await expect.poll(() => indicatorLink(page)).toBe("Reviews");
    await page.mouse.move(700, 600);
    await expect.poll(() => indicatorLink(page)).toBe("Catering");
  });

  test("nav marks no link while reading the story section, which has none", async ({ page }) => {
    await page.goto("/#catering");
    const nav = page.getByRole("navigation", { name: "Main" });
    await expect(nav.locator("a[aria-current]")).toHaveCount(1);
    await page.evaluate(() => document.getElementById("about")!.scrollIntoView());
    await expect(nav.locator("a[aria-current]")).toHaveCount(0);
  });

  test("photo viewer works with the keyboard", async ({ page }) => {
    await page.goto("/#gallery");
    await page.locator("#gallery li button").first().focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("1 / 12");
    await page.keyboard.press("ArrowRight");
    await expect(dialog).toContainText("2 / 12");
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("ArrowLeft");
    await expect(dialog).toContainText("12 / 12");
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    // Focus returns to the photo that opened it
    await expect(page.locator("#gallery li button").first()).toBeFocused();
  });

  test("layout fits common desktop and tablet widths", async ({ page }) => {
    for (const width of [768, 1024, 1280, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      await scrollThrough(page);
      const extra = await page.evaluate(() => {
        document.body.style.overflowX = "visible";
        return document.documentElement.scrollWidth - window.innerWidth;
      });
      expect(extra, `at ${width}px`).toBe(0);
    }
  });
});
