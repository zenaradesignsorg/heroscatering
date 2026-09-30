import { cn } from "@/lib/utils";
import type { OpenStatus } from "@/lib/business";

type OpenBadgeProps = {
  status: OpenStatus;
  className?: string;
};

const OpenBadge = ({ status, className }: OpenBadgeProps) => (
  <p
    className={cn(
      "inline-flex items-center gap-2.5 rounded-full border py-1.5 pl-3 pr-4 text-sm",
      status.isOpen
        ? "border-primary/20 bg-primary/[0.07] text-primary"
        : "border-accent/20 bg-accent/[0.07] text-hero-red-dark",
      className,
    )}
  >
    <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
      {status.isOpen && (
        <span className="absolute inset-0 animate-ping rounded-full bg-hero-green-light opacity-60 [animation-duration:2s]" />
      )}
      <span
        className={cn(
          "relative h-2.5 w-2.5 rounded-full",
          status.isOpen ? "bg-hero-green-light" : "bg-accent",
        )}
      />
    </span>
    <span>
      <span className="font-semibold">{status.state}</span>
      <span className="text-foreground/70">
        {status.isOpen ? " " : ", "}
        {status.detail}
      </span>
    </span>
  </p>
);

export default OpenBadge;
