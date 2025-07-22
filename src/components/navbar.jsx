import { useState } from "react";
import Button from "./button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="shadow border-2 border-black flex justify-between sm:gap-8 lg:max-w-2/3 lg:mx-auto xl:max-w-3/5 2xl:max-w-1/2 items-center px-3 py-2 mx-4 my-2 rounded-sm bg-white">
        <div className="bg-yellow w-10 h-10 z-20"></div>
        <Button className="z-20 sm:hidden" clickHandler={toggleMenu}>
          Menu
        </Button>
        <div className="hidden sm:flex sm:justify-around sm:grow">
          <a href="#" className="font-bold">
            Projects
          </a>
          <a href="#" className="font-bold">
            About
          </a>
          <a href="#" className="font-bold">
            Contact
          </a>
        </div>
        <Button className="hidden sm:block">Resume</Button>
      </nav>
      <div
        className={`flex flex-col items-center gap-16 justify-center absolute bg-white w-full h-full transition-[left] z-10 ${
          isMenuOpen ? "top-0 left-0" : "top-0 left-full"
        }`}
      >
        <a href="#" className="font-bold" onClick={() => toggleMenu()}>
          Projects
        </a>
        <a href="#" className="font-bold" onClick={() => toggleMenu()}>
          About
        </a>
        <a href="#" className="font-bold" onClick={() => toggleMenu()}>
          Contact
        </a>
        <a href="#" className="font-bold" onClick={() => toggleMenu()}>
          Resume
        </a>
      </div>
    </>
  );
}
export default Navbar;
