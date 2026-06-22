const Button = ({ children, href, variant = "primary", onClick, className = "", type = "button" }) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-sena-green text-white hover:bg-sena-darkgreen focus:ring-sena-green",
    secondary: "border-2 border-sena-green text-sena-green hover:bg-sena-green hover:text-white focus:ring-sena-green",
  };
  const combined = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={combined}>{children}</a>;
  }
  return <button onClick={onClick} className={combined} type={type}>{children}</button>;
};

export default Button;