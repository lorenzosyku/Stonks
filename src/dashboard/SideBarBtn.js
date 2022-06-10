import { MenuIcon } from "@heroicons/react/solid";

function SideBarBtn({ setIsSidebarOpen, isSidebarOpen }) {
  return (
    <div className="w-1/8">
      <button
        onClick={() => {
          setIsSidebarOpen(true);
        }}
        className={`${
          isSidebarOpen ? "-translate-x-48" : "translate-x-0"
        } top-4 mt-4 transition transform ease-linear duration-500 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800`}
      >
        <MenuIcon className="h-5 w-5 " />
      </button>
    </div>
  );
}

export default SideBarBtn;
