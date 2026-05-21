import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "yellow" | "blue" | "outline";
  className?: string;
}

const Button = ({
  children,
  variant = "yellow",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-2 rounded-md font-bold text-sm tracking-wide transition-all duration-200 shadow-sm active:scale-95";

  const variantStyles = {
    yellow: "bg-[#FFCC00] text-[#1E3A5F] hover:bg-yellow-400 hover:shadow-md",
    blue: "bg-[#1E3A5F] text-white hover:bg-blue-950 hover:shadow-md",
    outline:
      "bg-transparent border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
