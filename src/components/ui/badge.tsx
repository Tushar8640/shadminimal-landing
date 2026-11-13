import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#1C252E] text-white",
        secondary:
          "bg-[#8E33FF]/15 text-[#8E33FF]",
        success:
          "bg-[#22C55E]/15 text-[#118D57]",
        warning:
          "bg-[#FFAB00]/15 text-[#B76E00]",
        error:
          "bg-[#FF5630]/15 text-[#B71D18]",
        info:
          "bg-[#00B8D9]/15 text-[#006C9C]",
        primary:
          "bg-[#00A76F]/15 text-[#007867]",
        outline:
          "border border-[#DFE3E8] text-[#1C252E]",
        inverted:
          "bg-[#FF5630] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
