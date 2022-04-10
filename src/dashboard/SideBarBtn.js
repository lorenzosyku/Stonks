function SideBarBtn({setIsSidebarOpen, isSidebarOpen}) {
  return (
    <div className="w-1/8">
      <button
          onClick={() => {
            setIsSidebarOpen(true);
          }}
          className={`${
            isSidebarOpen ? "-translate-x-48" : "translate-x-0"
          } top-4 transition transform ease-linear duration-500 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800`}
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
    </div>
  )
}

export default SideBarBtn
