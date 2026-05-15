import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary";

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
};

const baseClasses =
  "inline-flex items-center justify-center px-4 py-4 rounded-lg font-bold cursor-pointer transition-all duration-150 ease-out transform " +
  "hover:translate-y-[-2px] active:translate-y-[4px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed";

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    className = "",
    children,
    as = "button",
    ...rest
  } = props as any;

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

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
