import * as React from "react";

export type ButtonVariant = "default" | "outlined" | "ghost";
export type ButtonSize = "lg" | "default" | "sm";
export type ButtonColor = "primary" | "white" | "accent";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  asChild?: boolean;
}

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center whitespace-nowrap font-bold tracking-wider cursor-pointer transition-all duration-300 border-2 focus:opacity-50 focus:scale-105";

const variantColorClasses: Record<
  ButtonColor,
  Record<ButtonVariant, string>
> = {
  primary: {
    default:
      "bg-white text-dark-text border-dark-text hover:bg-dark-text hover:text-white",
    outlined:
      "bg-transparent text-dark-text border-dark-text hover:bg-dark-text hover:text-white",
    ghost:
      "bg-transparent text-dark-text border-transparent hover:bg-dark-text/10",
  },
  white: {
    default:
      "bg-white text-dark-text border-dark-text hover:bg-transparent hover:text-white hover:border-light-bg",
    outlined:
      "bg-transparent text-white border-white hover:bg-white hover:text-dark-text",
    ghost: "bg-transparent text-white border-transparent hover:bg-white/10",
  },
  accent: {
    default:
      "bg-dark-text text-white border-dark-text hover:bg-white hover:text-dark-text",
    outlined:
      "bg-transparent text-dark-text border-dark-text hover:bg-dark-text hover:text-white",
    ghost:
      "bg-transparent text-dark-text border-transparent hover:bg-dark-text/10",
  },
};

const sizeClasses: Record<ButtonSize, string> = {
  lg: "min-w-[160px] h-12 px-6 text-lg",
  default: "min-w-[130px] h-10 px-4 text-lg",
  sm: "min-w-[100px] h-8 px-3 text-sm",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      color = "primary",
      type = "button",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      base,
      sizeClasses[size],
      variantColorClasses[color][variant],
      className,
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<Record<string, unknown>>;
      return React.cloneElement(child, {
        className: cn(child.props.className as string | undefined, classes),
        ref: ref as unknown as React.Ref<unknown>,
        ...props,
      });
    }

    return (
      <button ref={ref} type={type} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
