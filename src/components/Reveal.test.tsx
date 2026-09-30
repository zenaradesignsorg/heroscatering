import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Reveal from "./Reveal";
import MobileCallBar from "./MobileCallBar";

type Callback = (entries: Partial<IntersectionObserverEntry>[]) => void;
let observers: { callback: Callback; target?: Element }[] = [];

const setReducedMotion = (reduce: boolean) =>
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({ matches: reduce && query.includes("reduce"), media: query })),
  );

beforeEach(() => {
  observers = [];
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      entry: { callback: Callback; target?: Element };
      constructor(callback: Callback) {
        this.entry = { callback };
        observers.push(this.entry);
      }
      observe(target: Element) {
        this.entry.target = target;
      }
      disconnect() {}
      unobserve() {}
    },
  );
  setReducedMotion(false);
});

afterEach(() => vi.unstubAllGlobals());

const intersect = (target: Element | null, isIntersecting: boolean) =>
  act(() => observers.filter((o) => o.target === target).forEach((o) => o.callback([{ isIntersecting }])));

describe("Reveal", () => {
  it("starts hidden and becomes visible once scrolled into view", () => {
    render(<Reveal>Kothu roti</Reveal>);
    const el = screen.getByText("Kothu roti");
    expect(el).toHaveClass("reveal");
    expect(el).not.toHaveClass("is-visible");

    intersect(el, true);
    expect(el).toHaveClass("is-visible");

    // Plays once: scrolling away doesn't hide it again
    intersect(el, false);
    expect(el).toHaveClass("is-visible");
  });

  it("shows content immediately when the user prefers reduced motion", () => {
    setReducedMotion(true);
    render(<Reveal>Falooda</Reveal>);
    expect(screen.getByText("Falooda")).toHaveClass("is-visible");
  });

  it("passes the stagger delay to CSS", () => {
    render(
      <Reveal variant="stagger" delay={240}>
        Samosas
      </Reveal>,
    );
    const el = screen.getByText("Samosas");
    expect(el).toHaveClass("reveal-stagger");
    expect(el.style.getPropertyValue("--reveal-delay")).toBe("240ms");
  });
});

describe("MobileCallBar", () => {
  it("stays hidden while the hero call button is on screen, then slides up", () => {
    const heroCta = document.createElement("div");
    heroCta.id = "hero-cta";
    document.body.appendChild(heroCta);

    render(<MobileCallBar />);
    const call = screen.getByText("Call to order").closest("a")!;
    const bar = call.closest("div.fixed")!;

    intersect(heroCta, true);
    expect(bar).toHaveClass("translate-y-full");
    expect(call).toHaveAttribute("tabindex", "-1");

    intersect(heroCta, false);
    expect(bar).toHaveClass("translate-y-0");
    expect(call).not.toHaveAttribute("tabindex");

    heroCta.remove();
  });
});
