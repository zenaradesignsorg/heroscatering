import { useEffect, useRef, useState } from "react";

/**
 * True once the element has scrolled into view (never flips back).
 * Visible immediately when IntersectionObserver is unavailable or the user prefers reduced motion.
 */
export const useInView = <T extends Element>({
  rootMargin = "0px 0px -12% 0px",
  once = true,
}: { rootMargin?: string; once?: boolean } = {}) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, once]);

  return { ref, inView };
};
