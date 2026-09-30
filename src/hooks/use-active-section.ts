import { useEffect, useState } from "react";

/**
 * Id of the section currently crossing the middle band of the viewport, or null when none is
 * (e.g. at the top of the page, over the hero).
 */
export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting ? visible.add(entry.target.id) : visible.delete(entry.target.id),
        );
        // Sections are observed in page order, so the first visible one is the topmost
        const current = sections.find((s) => visible.has(s.id))?.id;
        if (current) {
          setActive(current);
          return;
        }
        // Between two sections the band can briefly touch neither; keep the previous one then,
        // and only clear it once the band is back above the first section (over the hero)
        const band = window.scrollY + window.innerHeight * 0.4;
        if (sections.length && band < sections[0].offsetTop) setActive(null);
      },
      // A thin band just above the middle of the viewport decides the active section
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [key]);

  return active;
};
