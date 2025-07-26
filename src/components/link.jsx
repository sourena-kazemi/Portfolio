function Link({ className, href, target, children }) {
  return (
    <a
      className={`inline-block font-bold shadow hover:-translate-0.5 hover:shadow-hover transition-all active:translate-1 active:shadow-none  border-2 border-black px-4 py-1 bg-white md:text-lg 2xl:text-xl ${className}`}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}
export default Link;
