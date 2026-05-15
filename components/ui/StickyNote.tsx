import { cn } from "@/lib/utils";

type Variant = "lime" | "blue" | "white";

type StickyNoteProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  rotate?: number;
  withTape?: boolean;
  asChild?: boolean;
};

export function StickyNote({
  children,
  variant = "lime",
  className,
  rotate = -2,
  withTape = false,
}: StickyNoteProps) {
  const variantClass =
    variant === "lime"
      ? "sticky--lime"
      : variant === "blue"
        ? "sticky--blue"
        : "sticky--white";

  return (
    <span
      className={cn(
        "sticky font-display",
        variantClass,
        withTape && "sticky-tape",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
