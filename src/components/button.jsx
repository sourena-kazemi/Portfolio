function Button({ className, clickHandler, children }) {
  return (
    <button
      className={`font-bold shadow border-2 border-black px-4 py-1 bg-white ${className}`}
      onClick={() => clickHandler()}
    >
      {children}
    </button>
  );
}
export default Button;
