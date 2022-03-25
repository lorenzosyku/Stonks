import Datagraph from "../components/Datagraph";
import Details from "./Details";
import WatchlistSegment from "./WatchlistSegment";
import { Outlet } from "react-router";
import Trade from "../components/Trade";

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
  //------,
  stonk,
  portfolio,
  setPortfolio,
  transactions,
  setTransactions,
  trades,
  setTrades,
}) {
  return (
    <div>
      <div
        className={`transition-all duration-500 top-0 ${
          isSidebarOpen ? "left-64" : "left-0"
        }`}
      >
        <div className="px-5 pt-3">
          <WatchlistSegment
            watchlist={watchlist}
            setWatchlist={setWatchlist}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
        <div className="md:flex p-5 space-x-5">
          <div className="md:ml-64 md:w-3/5 bg-gray-100 rounded-md">
            <Datagraph series={series} />
            <Trade
              stonk={stonk}
              portfolio={portfolio}
              setPortfolio={setPortfolio}
              transactions={transactions}
              setTransactions={setTransactions}
              trades={trades}
              setTrades={setTrades}
            />
          </div>
          <div className="bg-gray-800 shadow-md md:w-1/5 rounded-md border dark:border-gray-700">
            <Details details={details} />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default MainContent;
