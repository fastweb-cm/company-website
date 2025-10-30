import { cn } from "../utils/utils";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  hoverAnimation = "slide", // slide | fill | pop
  hoverBg = "secondary", // black | primary | secondary | white etc
  disabled = false,
  className = "",
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0";

  // Static mapping for Tailwind to recognize all potential bg colors
  const hoverBgColors = {
    black: "before:bg-black",
    white: "before:bg-white",
    primary: "before:bg-primary",
    secondary: "before:bg-secondary",
    muted: "before:bg-muted",
  };

  const variants = {
    black: `bg-black text-white focus:ring-0 before:absolute before:inset-0 ${hoverBgColors[hoverBg]} before:translate-x-[-100%] before:transition-transform before:duration-300`,
    primary: `bg-primary text-white focus:ring-primary before:absolute before:inset-0 ${hoverBgColors[hoverBg]} before:translate-x-[-100%] before:transition-transform before:duration-300`,
    secondary: `bg-secondary text-white focus:ring-secondary before:absolute before:inset-0 ${hoverBgColors[hoverBg]} before:translate-x-[-100%] before:transition-transform before:duration-300`,
    outline: `border border-primary text-primary hover:border-transparent before:absolute before:inset-0 ${hoverBgColors[hoverBg]} before:translate-x-[-100%] before:transition-transform before:duration-300`,
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };

  const hoverClasses = {
    slide: "hover:before:translate-x-0",
    fill: "hover:before:translate-x-0",
    pop: "hover:scale-105",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        hoverClasses[hoverAnimation],
        className
      )}
    >
      {Icon && iconPosition === "left" && (
        <span className="relative z-10 mr-2">
          <Icon className="w-5 h-5" />
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === "right" && (
        <span className="relative z-10 ml-2">
          <Icon className="w-5 h-5" />
        </span>
      )}
    </button>
  );
}
