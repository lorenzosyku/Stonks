import SideBarBtn from "../dashboard/SideBarBtn";
import Datagraph from "../components/Datagraph";
import Search from "../components/Search";
import Details from "./Details";
import WatchlistSegment from "./WatchlistSegment";
import Trade from "../components/Trade";
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
  series,
  setTrades,
  stonk,
  portfolio,
  setPortfolio,
  setTransactions,
  transactions,
  trades
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
        <div className="">
          <WatchlistSegment watchlist={watchlist} setWatchlist={setWatchlist} />
        </div>
        <div className="md:flex p-5 ">
          <div className="md:ml-64 md:w-3/5 bg-gray-100 m-5 rounded-md">
            <Datagraph series={series} />
          </div>
          <div className="bg-gray-100 md:w-1/5 m-5 rounded-md">
            <Details details={details} />
          </div>
        </div>
        
      </div>
      <Outlet />
    </div>
  );
}

export default MainContent;
