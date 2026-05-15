import { cn } from "@/lib/utils";

type Fold = "lime" | "blue" | "none";

type PaperCardProps = {
  children: React.ReactNode;
  className?: string;
  fold?: Fold;
  rotate?: number;
  withClip?: boolean;
  clipSide?: "left" | "right";
};

export function PaperCard({
  children,
  className,
  fold = "lime",
  rotate = 0,
  withClip = false,
  clipSide = "left",
}: PaperCardProps) {
  return (
    <div
      className={cn("paper-card", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {withClip && (
        <span
          aria-hidden
          className={cn(
            "paper-card__clip",
            clipSide === "right" && "paper-card__clip--right",
          )}
        />
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
      {fold !== "none" && (
        <span
          aria-hidden
          className={cn(
            "paper-card__fold",
            fold === "lime"
              ? "paper-card__fold--lime"
              : "paper-card__fold--blue",
          )}
        />
      )}
    </div>
  );
}
