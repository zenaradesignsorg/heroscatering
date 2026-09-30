import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  /**
   * "rise" fades content up; "image" unmasks a photo with a slow settle;
   * "stagger" rises each direct child in turn (children set their order with the --i custom property)
   */
  variant?: "rise" | "image" | "stagger";
  /** Delay in ms, for staggering siblings */
  delay?: number;
  className?: string;
};

const variantClass = { rise: "reveal", image: "reveal-image", stagger: "reveal-stagger" };

/** Plays a one-time entrance when the element scrolls into view. */
const Reveal = ({ children, as: Tag = "div", variant = "rise", delay = 0, className }: RevealProps) => {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={cn(variantClass[variant], inView && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
