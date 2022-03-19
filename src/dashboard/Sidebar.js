import { useAuth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const currentUser = useAuth();
  const navToTrx = useNavigate();
  const navToWatchList = useNavigate();
  const navToPortfolio = useNavigate();
  const navToBuySell = useNavigate();

  return (
    <div
      className={`transition-all  duration-500  fixed top-0 ${
        isSidebarOpen ? "left-0" : "-left-64"
      }`}
    >
      <div className="flex z-50 h-screen overflow-y-auto flex-col bg-white  w-64 px-4 py-8 border-r min-h-screen relative">
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              setIsSidebarOpen(false);
            }}
            className="md:hidden absolute top-8 right-1  text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
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
          <div className="flex flex-col items-center">
            <h2 className="font-poppins text-xl text-shade-lightblue italic font-semibold">
              TeztNet<span className="text-amber-400">-V1</span>
            </h2>
            <h4 className="italic font-poppins font-semibold text-xs">
              Beta Version
            </h4>
          </div>
        </div>

        <nav role="navigation" class="p-6">
          <div className="mt-4 -mx-4 relative overflow-y-auto overflow-x-hidden h-[65vh]">
            <ul className="space-y-4 mb-6 mt-8">
              <li
                onClick={() => {
                  navToWatchList("watchlist");
                }}
                className="hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer"
              >
                <div
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
                </div>
              </li>
              <li
                onClick={() => {
                  navToBuySell("trade");
                }}
                className="hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer"
              >
                <div
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
                </div>
              </li>
              <li
                onClick={() => {
                  navToPortfolio("portfolio");
                }}
                className="hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer"
              >
                <div
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
                </div>
              </li>
              <li
                onClick={() => {
                  navToTrx("transactions");
                }}
                className="hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer"
              >
                <div
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
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex items-center px-4 -mx-2 mt-5">
          <img
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
            className="h-9 w-9 mx-2 object-center object-cover rounded-full"
          />
          <h4 className="mx-2 font-medium text-gray-800 hover:underline cursor-pointer">
            {currentUser?.email}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
