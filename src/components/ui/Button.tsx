import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import { motion, useAnimation } from "framer-motion";

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
    "bg-secondary-btn text-primary shadow-[0_6px_0px_var(--color-secondary-shadow)] hover:shadow-[0_8px_0px_var(--color-secondary-shadow)] hover:translate-y-[-2px] active:translate-y-[4px] active:shadow-none",
  secondary:
    "bg-primary text-white shadow-[0_6px_0px_var(--color-primary-shadow)] hover:shadow-[0_8px_0px_var(--color-primary-shadow)] hover:translate-y-[-2px] active:translate-y-[4px] active:shadow-none",
  disabled:
    "bg-disabled-bg text-primary shadow-[0_6px_0px_var(--color-disabled-shadow)] cursor-not-allowed",
  white:
    "bg-white text-primary shadow-[0_6px_0px_var(--color-disabled-bg)] hover:shadow-[0_8px_0px_var(--color-disabled-bg)] hover:translate-y-[-2px] active:translate-y-[4px] active:shadow-none",
};

const baseClasses =
  "inline-flex items-center justify-center px-4 py-4 rounded-lg font-bold transition-all duration-150 ease-out transform disabled:cursor-not-allowed";

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
  const controls = useAnimation();

  const handleAction = (e: React.MouseEvent) => {
    if (effectiveVariant === "disabled") {
      controls.start({
        x: [-4, 4, -4, 4, 0],
        transition: { duration: 0.4 },
      });
    }
    if (props.onClick) {
      props.onClick(e as any);
    }
  };

  if (as === "a") {
    const {
      disabled: _,
      onAnimationStart,
      onDragStart,
      onDragEnd,
      onDrag,
      ...linkRest
    } = rest;
    return (
      <motion.a
        className={classes}
        {...(linkRest as any)}
        animate={controls}
        onClick={handleAction}
      >
        {children}
      </motion.a>
    );
  }

  const {
    disabled: _,
    onAnimationStart,
    onDragStart,
    onDragEnd,
    onDrag,
    ...buttonRest
  } = rest;
  return (
    <motion.button
      className={classes}
      {...(buttonRest as any)}
      animate={controls}
      onClick={handleAction}
    >
      {children}
    </motion.button>
  );
};

export default Button;
