import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#1C252E] text-white hover:bg-[#1C252E]/90 shadow-sm",
        primary:
          "bg-[#00A76F] text-white hover:bg-[#007867] shadow-primary-button",
        secondary:
          "bg-[#8E33FF] text-white hover:bg-[#5119B7]",
        destructive:
          "bg-[#FF5630] text-white hover:bg-[#B71D18]",
        outline:
          "border border-[#DFE3E8] bg-transparent text-[#1C252E] hover:bg-[#919EAB]/8",
        ghost:
          "text-[#637381] hover:text-[#1C252E] hover:bg-[#919EAB]/8",
        soft:
          "bg-[#00A76F]/12 text-[#00A76F] hover:bg-[#00A76F]/20",
        link: "text-[#00A76F] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-6 text-base",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
