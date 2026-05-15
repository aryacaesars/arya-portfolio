"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center gap-3 whitespace-nowrap rounded-full font-semibold transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-[#D9FF3F]/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-white/15 bg-white/[0.03] text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-[#D9FF3F]/70 hover:bg-[#D9FF3F]/[0.06] hover:shadow-[0_14px_40px_-10px_rgba(217,255,63,0.35)]",
        lime:
          "border border-[#D9FF3F] bg-[#D9FF3F] text-[#050505] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgba(217,255,63,0.55)]",
        blue:
          "border border-[#2563FF] bg-[#2563FF] text-white hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgba(37,99,255,0.55)]",
        ghost: "text-white/85 hover:text-white",
      },
      size: {
        default: "px-5 py-2.5 text-sm",
        sm: "px-4 py-2 text-xs",
        lg: "px-7 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  arrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      arrow = true,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const arrowBg =
      variant === "lime"
        ? "bg-[#050505] text-[#D9FF3F]"
        : variant === "blue"
          ? "bg-white text-[#2563FF]"
          : "bg-[#D9FF3F] text-[#050505]";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <span>{children}</span>
            {arrow && (
              <span
                className={cn(
                  "inline-flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                  arrowBg,
                )}
              >
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            )}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

/* A small helper to render the inner arrow consistently when using asChild */
export function PillArrow({
  variant = "default",
}: {
  variant?: "default" | "lime" | "blue";
}) {
  const arrowBg =
    variant === "lime"
      ? "bg-[#050505] text-[#D9FF3F]"
      : variant === "blue"
        ? "bg-white text-[#2563FF]"
        : "bg-[#D9FF3F] text-[#050505]";
  return (
    <span
      className={cn(
        "inline-flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        arrowBg,
      )}
    >
      <ArrowUpRight size={14} strokeWidth={2.5} />
    </span>
  );
}
