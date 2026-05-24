import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "yellow" | "outline" | "blue";
  className?: string;
}

const Button = ({
  children,
  variant = "yellow",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-[14px] py-[16px] rounded-md font-bold text-sm tracking-wide transition-all duration-200 shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-hss-scout-darkblue focus:ring-offset-2";

  const variantStyles = {
    yellow: "bg-hss-yellow text-hss-mediumblue hover:opacity-90 hover:shadow-md",
    // 修复了 border-1 为合法的 border
    outline: "bg-hss-mediumblue border border-hss-yellow text-hss-yellow hover:border-hss-yellow/80 hover:text-hss-yellow/80",
    blue: "bg-hss-mediumblue text-hss-yellow hover:opacity-90 hover:shadow-md",
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