import SideBarBtn from "../dashboard/SideBarBtn";
import Datagraph from "../components/Datagraph";
import Search from "../components/Search";
import Details from "./Details";
import WatchlistSegment from "./WatchlistSegment";
import { Outlet } from "react-router";

function MainContent({
  isSidebarOpen,
  setIsSidebarOpen,
  setStonk,
  setSeries,
  setDetails,
  watchlist,
  setWatchlist,
  details,
  series
}) {
  return (
    <div>
      <div className="flex">
        <SideBarBtn
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />

        <Search
          setStonk={setStonk}
          setSeries={setSeries}
          setDetails={setDetails}
          setWatchlist={setWatchlist}
          watchlist={watchlist}
        />
      </div>
      <div
        className={`transition-all duration-500 top-0 ${
          isSidebarOpen ? "left-64" : "left-0"
        }`}
      >
        <div className="px-5 pt-3">
          <WatchlistSegment watchlist={watchlist} setWatchlist={setWatchlist} />
        </div>
        <div className="md:flex p-5 space-x-5">
          <div className="md:ml-64 md:w-3/5 bg-gray-100 rounded-md">
            <Datagraph series={series} />
          </div>
          <div className="bg-gray-800 md:w-1/5 rounded-md border dark:border-gray-700">
            <Details details={details} />
          </div>
        </div>
        
      </div>
      <Outlet />
    </div>
  );
}

export default MainContent;
