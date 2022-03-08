import React, { useState } from "react";

/*function Sidebar() {
  return (
    <div className="h-screen flex items-end justify-end px-4 pb-6">
      <button className="relative z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
        <span className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>

      <div className="z-20 fixed top-0 -left-96 md:left-0 h-screen w-9/12 md:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <nav role="navigation" class="p-6">
          <div className="flex items-center gap-4 pb-4">
            <h2 className="font-poppins text-xl text-shade-lightblue italic font-semibold">
              TeztNet<span className="text-amber-400">-V1</span>
            </h2>
          </div>

          <div className="mt-4 -mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh]">
            <ul className="space-y-4 mb-12 px-4 mt-8">
              <li>
                <a
                  href="#"
                  className="flex gap-4 text-gray-600 hover:text-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  WatchList
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-4 text-gray-600 hover:text-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Buy/Sell
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-4 text-gray-600 hover:text-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-4 text-gray-600 hover:text-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  Transactions
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="z-10 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200"></div>
    </div>
  );
}

export default Sidebar;*/

//import { useGlobalContext } from './context';
const links = [
  {
    id: 1,
    url: "/color-shade-generator",
    text: "home",
    icon: "", //<FaHome className="w-5 h-5" />,
  },
  {
    id: 2,
    url: "/grocery-bud",
    text: "team",
    icon: "", //<FaUserFriends className="w-5 h-5" />,
  },
  {
    id: 3,
    url: "/navbar",
    text: "projects",
    icon: "", //<FaFolderOpen className="w-5 h-5" />,
  },
  {
    id: 4,
    url: "/sidebar",
    text: "calendar",
    icon: "", //<FaCalendarAlt className="w-5 h-5" />,
  },
  {
    id: 5,
    url: "/sidebar",
    text: "documents",
    icon: "", //<HiDocument className="w-5 h-5" />,
  },
];

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {

  return (
    <div
      className={`transition-all  duration-500  fixed top-0 ${
        isSidebarOpen ? "left-0" : "-left-64"
      }`}
    >
      <div className="flex h-screen overflow-y-auto flex-col bg-white  w-64 px-4 py-8 border-r min-h-screen relative">
        <button
          onClick={() => {
            setIsSidebarOpen(false);
          }}
          className="absolute top-1 right-1  text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center gap-4 pb-4">
          <h2 className="font-poppins text-xl text-shade-lightblue italic font-semibold">
            TeztNet<span className="text-amber-400">-V1</span>
          </h2>
        </div>
        <div className="relative mt-6">
          <label
            className="absolute inset-y-0 left-0 pl-3 flex items-center "
            htmlFor="searchP"
          ></label>
          <input
            id="searchP"
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 hover:border-gray-400 pl-10 py-3 pr-4 text-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <nav role="navigation" class="p-6">
          <div className="mt-4 -mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh]">
            <ul className="space-y-4 mb-12 px-4 mt-8">
              <li className="hover:bg-gray-200 hover:text-gray-800 px-4 py-2 rounded-md">
                <a
                  href="#"
                  className="flex gap-4 text-gray-600 hover:text-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  WatchList
                </a>
              </li>
              <li className="hover:bg-gray-200 hover:text-gray-800 px-4 py-2 rounded-md">
                <a
                  href="#"
                  className="flex gap-4 text-gray-600 hover:text-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Buy/Sell
                </a>
              </li>
              <li className="hover:bg-gray-200 hover:text-gray-800 px-4 py-2 rounded-md">
                <a
                  href="#"
                  className="flex gap-4 text-gray-600 hover:text-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  Portfolio
                </a>
              </li>
              <li className="hover:bg-gray-200 hover:text-gray-800 px-4 py-2 rounded-md">
                <a
                  href="#"
                  className="flex gap-4 text-gray-600 hover:text-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  Transactions
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6" />
          <a
            href="/color-shade-generator"
            className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
          >
            
            <span className="mx-4 font-medium">Ticket</span>
          </a>
          <a
            href="/color-shade-generator"
            className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
          >
            <span className="mx-4 font-medium">Settings</span>
          </a>
        </nav>
        {/*<div className="flex items-center px-4 -mx-2 mt-5">
          <img
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
            className="h-9 w-9 mx-2 object-center object-cover rounded-full"
          />
          <h4 className="mx-2 font-medium text-gray-800 hover:underline cursor-pointer">
            John Doe
          </h4>
        </div>*/}
      </div>
    </div>
  );
};

export default Sidebar;
