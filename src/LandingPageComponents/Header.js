import { Link } from "react-scroll";
import { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { signUp, useAuth, logout, login } from "../firebase";
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert("error");
    }

    setLoading(false);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert("error");
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
    } catch (error) {
      alert("error");
    }
    setLoading(false);
  };

  return (
    <nav className="">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-center items-center">
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
                <li className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  <Link
                    to="about"
                    smooth={true}
                    className="cursor-pointer py-2 hover:text-shade-lightblue"
                  >
                    Home
                  </Link>
                </li>

                <li className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  <Link
                    to="markets"
                    smooth={true}
                    className="cursor-pointer py-2 hover:text-shade-lightblue"
                  >
                    Markets
                  </Link>
                </li>

                <li className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  <Link
                    to="services"
                    smooth={true}
                    className="cursor-pointer py-2 hover:text-shade-lightblue"
                  >
                    Services
                  </Link>
                </li>

                <li className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  <Link
                    to="contact"
                    smooth={true}
                    className="cursor-pointer py-2 hover:text-shade-lightblue"
                  >
                    Contact Us
                  </Link>
                </li>

                <div className="">
                  <button
                    className="cursor-pointer font-semibold bg-shade-lightblue px-3 mx-5 py-1 text-white hover:bg-blue-400 rounded-sm"
                    onClick={() => {
                      navigate("/login")
                    }}
                  >
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
              className="bg-shade-lightblue inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-shade-darkgrayblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
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
        {(refer) => (
          <div className="md:hidden" id="mobile-menu">
            <ul refer={refer} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                <Link
                  to="about"
                  smooth={true}
                  className="cursor-pointer py-2 hover:text-shade-lightblue"
                >
                  Home
                </Link>
              </li>

              <li className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                <Link
                  to="services"
                  smooth={true}
                  className="cursor-pointer py-2 hover:text-shade-lightblue"
                >
                  Services
                </Link>
              </li>

              <li className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                <Link
                  to="markets"
                  smooth={true}
                  className="cursor-pointer py-2 hover:text-shade-lightblue"
                >
                  Markets
                </Link>
              </li>

              <li className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                <Link
                  to="contact"
                  smooth={true}
                  className="cursor-pointer py-2 hover:text-shade-lightblue"
                >
                  Contact Us
                </Link>
              </li>

              <div className="">
                <button
                  className="cursor-pointer font-semibold bg-shade-lightblue px-3 mx-3 py-1 my-4 text-white hover:bg-blue-400 rounded-sm"
                  onClick={() => {
                    navigate("/login")
                  }}
                >
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
