import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl bg-white dark:bg-[#212B36] text-[#1C252E] dark:text-white shadow-minimal-card border border-transparent dark:border-white/5 transition-colors relative overflow-hidden",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { subheader?: React.ReactNode; action?: React.ReactNode }
>(({ className, children, subheader, action, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-start justify-between p-6 pb-4", className)}
    {...props}
  >
    <div className="space-y-1">
      {typeof children === "string" ? (
        <h3 className="text-lg font-bold tracking-tight text-[#1C252E] dark:text-white">
          {children}
        </h3>
      ) : (
        children
      )}
      {subheader && (
        <p className="text-xs text-[#919EAB] dark:text-[#919EAB] font-normal">{subheader}</p>
      )}
    </div>
    {action && <div className="ml-auto">{action}</div>}
  </div>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-bold tracking-tight text-[#1C252E]", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-[#919EAB]", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
