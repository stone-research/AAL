import React from 'react';
import { cn } from "@/lib/utils";

// Define the prop types including children
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

// Update Card component to use the CardProps interface
export const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`shadow-lg rounded-lg ${className}`}>{children}</div>;
};

// Define the prop types including children for CardContent
interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

// Update CardContent component to use the CardContentProps interface
export const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
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
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

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

export { CardHeader, CardFooter, CardTitle, CardDescription };
