import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm  font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full  focus:ring-offset-2 focus:outline-none focus:ring focus:bg-yellow-300 disabled:cursor-not-allowed focus:ring-yellow-300 hover:bg-yellow-300 text-stone-800 ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "text-sm px-4 py-2.5 md:px-6 md:py-3.5 inline-block  font-semibold tracking-wide uppercase transition-colors duration-300  rounded-full border-2 border-stone-300  focus:ring-offset-2 focus:outline-none focus:ring focus:bg-stone-300 disabled:cursor-not-allowed focus:ring-stone-200 hover:bg-stone-300 text-stone-400 hover:text-stone-800 focus:text-stone-800 ",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        to={to}
        disabled={disabled}
        onClick={onClick}
        className={styles[type]}
      >
        {children}
      </button>
    );

  return (
    <button to={to} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
