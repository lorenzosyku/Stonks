import { Link } from "react-scroll";
import { useState } from "react";
import { Transition } from "@headlessui/react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <h2 className="font-poppins text-xl text-shade-lightblue italic font-semibold">
                TeztNet<span className="text-amber-400">-V1</span>
              </h2>
              <h4 className="italic font-poppins font-semibold text-xs">
                Beta Version
              </h4>
            </div>
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                <li className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link
                    to="about"
                    smooth={true}
                    className="cursor-pointer hover:border-b-2 border-shade-lightblue py-2 hover:text-shade-lightblue"
                  >
                    Home
                  </Link>
                </li>

                <li className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link
                    to="services"
                    smooth={true}
                    className="cursor-pointer hover:border-b-2 border-shade-lightblue py-2 hover:text-shade-lightblue"
                  >
                    Services
                  </Link>
                </li>

                <li className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link
                    to="markets"
                    smooth={true}
                    className="cursor-pointer hover:border-b-2 border-shade-lightblue py-2 hover:text-shade-lightblue"
                  >
                    Markets
                  </Link>
                </li>

                <li className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
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
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <ul ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link
                  to="about"
                  smooth={true}
                  className="cursor-pointer hover:border-b-2 border-shade-lightblue py-2 hover:text-shade-lightblue"
                >
                  Home
                </Link>
              </li>

              <li className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link
                  to="services"
                  smooth={true}
                  className="cursor-pointer hover:border-b-2 border-shade-lightblue py-2 hover:text-shade-lightblue"
                >
                  Services
                </Link>
              </li>

              <li className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link
                  to="markets"
                  smooth={true}
                  className="cursor-pointer hover:border-b-2 border-shade-lightblue py-2 hover:text-shade-lightblue"
                >
                  Markets
                </Link>
              </li>

              <li className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
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
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Header;
