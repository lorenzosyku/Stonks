import Sidebar from "./dashboard/Sidebar";
import { useState } from "react";
import SideBarBtn from "./SideBarBtn";
import PortfolioGraph from "./components/PortfolioGraph";
import Datagraph from "./components/Datagraph";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./dashboard/Details";
import TransactionList from "./components/TransactionList";
import WatchlistSegment from "./dashboard/WatchlistSegment";

function DashboardPage({
  portfolio,
  trades,
  setTrades,
  series,
  stonk,
  setStonk,
  setSeries,
  details,
  setDetails,
  watchlist,
  setWatchlist,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-300">
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
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
    </div>
  );
}

export default DashboardPage;
