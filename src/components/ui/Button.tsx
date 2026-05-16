import React from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-accent text-white hover:bg-[#1D4ED8] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40",
  secondary:
    "border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-2.5 text-sm",
  lg: "px-10 py-4 text-sm",
};

export default function Button({ variant = "primary", size = "default", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`font-body font-semibold rounded-lg transition-all duration-300 ease-out flex items-center justify-center gap-3 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
