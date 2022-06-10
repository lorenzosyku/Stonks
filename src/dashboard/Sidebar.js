import { useAuth, auth, signOut } from "../firebase";
import { useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import {
  ChartPieIcon,
  ClipboardListIcon,
  HomeIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/solid";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const currentUser = useAuth();
  const navToTrx = useNavigate();
  const navToWatchList = useNavigate();
  const navToPortfolio = useNavigate();

  const handleLogout = () => {
    navToTrx("/login");
    return signOut(auth);
  };

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
            <XIcon className="h-5 w-5 " />
          </button>
          <div className="flex flex-col items-center pl-5">
            <h2 className="font-poppins text-xl text-shade-lightblue italic font-semibold">
              TeztNet<span className="text-amber-400">-V1</span>
            </h2>
            <h4 className="italic font-poppins font-semibold text-xs">
              Beta Version
            </h4>
          </div>
        </div>

        <nav role="navigation" className="p-6">
          <div className="mt-4 -mx-4 relative overflow-y-auto overflow-x-hidden h-[65vh]">
            <ul className="space-y-4 mb-6 mt-8">
              <li
                onClick={() => {
                  navToWatchList("watchlist");
                }}
                className="hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer"
              >
                <div className="flex gap-4 text-gray-600 hover:text-gray-800 transition">
                  <HomeIcon className="h-5 w-5 " />
                  WatchList
                </div>
              </li>

              <li
                onClick={() => {
                  navToPortfolio("portfolio");
                }}
                className="hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer"
              >
                <div className="flex gap-4 text-gray-600 hover:text-gray-800 transition">
                  <ChartPieIcon className="h-5 w-5 " />
                  Portfolio
                </div>
              </li>
              <li
                onClick={() => {
                  navToTrx("transactions");
                }}
                className="hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer"
              >
                <div className="flex gap-4 text-gray-600 hover:text-gray-800 transition">
                  <ClipboardListIcon className="h-5 w-5 " />
                  Transactions
                </div>
              </li>
              <li
                onClick={handleLogout}
                className="hover:bg-gray-200 hover:text-gray-800 p-2 rounded-md cursor-pointer"
              >
                <div className="flex gap-4 text-gray-600 hover:text-gray-800 transition">
                  <UserIcon className="h-5 w-5 " />
                  Sign Out
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex items-center px-4 -mx-2 mt-5">
          <Avatar currentUser={currentUser} />

          <h4 className="mx-2 font-medium text-gray-800 hover:underline cursor-pointer">
            {currentUser?.email}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
