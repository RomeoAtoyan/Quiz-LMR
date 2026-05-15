import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "white";

type BadgeProps = {
  variant?: Variant;
  children?: ReactNode;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-secondary-btn text-primary shadow-[0_6px_0px_var(--color-secondary-shadow)]",
  secondary:
    "bg-primary text-white shadow-[0_6px_0px_var(--color-primary-shadow)]",
  white:
    "bg-white text-primary shadow-[0_6px_0px_var(--color-primary-shadow)]",
};

const baseClasses =
  "inline-flex items-center justify-center px-6 py-2 rounded-full font-bold transition-all duration-150 ease-out";

const Badge = ({ variant = "primary", children, className = "" }: BadgeProps) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Badge;
