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
    "inline-flex items-center justify-center px-[16px] py-[14px] rounded-[8px] font-semibold text-base md:text-[18px] transition-all duration-200 shadow-sm active:scale-90 focus:outline-none"

  const variantStyles = {
    yellow: "bg-hss-yellow text-hss-mediumblue hover:bg-hss-mediumblue hover:text-hss-yellow hover:ring-1 hover:ring-inset hover:ring-hss-yellow hover:opacity-90 hover:shadow-md",

    outline: "bg-hss-mediumblue ring-1 ring-inset ring-hss-yellow text-hss-yellow hover:bg-hss-yellow hover:text-hss-mediumblue hover:ring-0 hover:opacity-90 hover:shadow-md",
    
    
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