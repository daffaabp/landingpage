import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-brand-purple text-white hover:bg-brand-darkPurple shadow-md hover:shadow-lg focus:ring-brand-purple",
    secondary:
      "bg-brand-orange text-brand-darkPurple hover:bg-brand-darkOrange hover:text-white shadow-md hover:shadow-lg focus:ring-brand-orange",
    outline:
      "border-2 border-brand-purple text-brand-purple hover:bg-brand-lightPurple focus:ring-brand-purple",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
