function Link({ className, href, children }) {
  return (
    <a
      className={`inline-block font-bold shadow border-2 border-black px-4 py-1 bg-white md:text-lg 2xl:text-xl ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}
export default Link;
