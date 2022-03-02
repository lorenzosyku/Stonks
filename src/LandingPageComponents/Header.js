import { Link } from "react-scroll";
import { useState } from 'react';
import { Transition } from "@headlessui/react";
//https://codesandbox.io/s/dy13o?file=/src/Nav.js:41-88

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white flex items-center w-full " id="home">
      <nav
        className="flex w-full justify-between items-center"
        id="nav-wrap"
      >
        <div className="flex flex-col p-5 ">
          <h2 className="font-poppins text-xl text-shade-lightblue italic font-semibold">
            TeztNet<span className="text-amber-400">-V1</span>
          </h2>
          <h4 className="italic font-poppins font-semibold text-xs">
            Beta Version
          </h4>
        </div>
        <div className="md:hidden p-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        
        <ul
          id="nav"
          className="md:flex space-x-5 items-center text-black font-semibold"
        >
          <li>
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer hover:border-b-2 border-shade-lightblue py-2 hover:text-shade-lightblue"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              className="cursor-pointer hover:border-b-2 border-shade-lightblue py-2 hover:text-shade-lightblue"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              className="cursor-pointer hover:border-b-2 border-shade-lightblue py-2 hover:text-shade-lightblue"
            >
              Contact Us
            </Link>
          </li>
          <div className="p-5">
            <button className="cursor-pointer font-semibold bg-shade-lightblue px-3 mx-5 py-1 text-white hover:bg-blue-400 rounded-sm">
            Login
          </button>
          </div>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
