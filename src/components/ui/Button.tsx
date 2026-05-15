import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "disabled" | "white";

type BaseProps = {
  variant?: Variant;
  children?: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-secondary-btn text-primary shadow-[0_6px_0px_var(--color-secondary-shadow)] hover:shadow-[0_8px_0px_var(--color-secondary-shadow)]",
  secondary:
    "bg-primary text-white shadow-[0_6px_0px_var(--color-primary-shadow)] hover:shadow-[0_8px_0px_var(--color-primary-shadow)]",
  disabled:
    "bg-disabled-bg text-primary shadow-[0_6px_0px_var(--color-disabled-shadow)] cursor-not-allowed",
  white:
    "bg-white text-primary shadow-[0_6px_0px_var(--color-disabled-bg)] hover:shadow-[0_8px_0px_var(--color-disabled-bg)]",
};

const baseClasses =
  "inline-flex items-center justify-center px-4 py-4 rounded-lg font-bold cursor-pointer transition-all duration-150 ease-out transform " +
  "hover:translate-y-[-2px] active:translate-y-[4px] active:shadow-none disabled:cursor-not-allowed";

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    className = "",
    children,
    as = "button",
    ...rest
  } = props as any;

  const effectiveVariant = rest.disabled ? "disabled" : variant;
  const classes = `${baseClasses} ${variantClasses[effectiveVariant]} ${className}`;

  if (as === "a") {
    return (
      <a
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
