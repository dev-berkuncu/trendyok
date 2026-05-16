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
    "bg-[#8FA87A] text-white hover:bg-[#7A9566] shadow-lg shadow-[#B8C7A3]/25 hover:shadow-[#B8C7A3]/40",
  secondary:
    "border border-[#D4C4B0] text-[#6B6560] hover:bg-[#F7C8D0]/20 hover:text-[#2D2A26] hover:border-[#F7C8D0]",
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
