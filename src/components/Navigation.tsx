import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="mt-7 mb-8 sm:mb-36 flex flex-wrap items-center justify-between relative">
        <div className="font-bold text-2xl mb-2 sm:mb-0">
          <Link to="/">LOGO</Link>
        </div>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
          className="md:hidden sm:block sm:text-xl w-32"
        >
          Menu
        </button>
        {isMenuOpen && (
          <ul className="md:hidden absolute right-16 top-16 w-16">
            <li className="mb-2 sm:mb-0 sm:mr-4 hover:bg-red-400 p-1 w-32 hover:text-white">
              <Link to="/blog" className="block sm:inline-block">
                Blog
              </Link>
            </li>
            <li className="mb-2 sm:mb-0 sm:mr-4 hover:bg-red-400 p-1 w-32 hover:text-white">
              <Link to="/works" className="block sm:inline-block">
                Works
              </Link>
            </li>
            <li className="hover:bg-red-400 p-1 w-32 hover:text-white">
              <Link to="/contact" className="block sm:inline-block">
                Contact
              </Link>
            </li>
          </ul>
        )}
        <ul className="sm:hidden md:flex flex-col sm:flex-row list-none w-full sm:w-auto text-xl sm:relative sm:right-0 md:-right-20 top-full sm:top-0">
          <li className="mb-2 sm:mb-0 sm:mr-4">
            <Link to="/blog" className="block sm:inline-block">
              Blog
            </Link>
          </li>
          <li className="mb-2 sm:mb-0 sm:mr-4">
            <Link to="/works" className="block sm:inline-block">
              Works
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block sm:inline-block">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
