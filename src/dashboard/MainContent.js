import Datagraph from "../components/Datagraph";
import Details from "./Details";
import WatchlistSegment from "./WatchlistSegment";
import { Outlet } from "react-router";
import Trade from "../components/Trade";

function MainContent({
  currentUser,
  isSidebarOpen,
  dbWatchlist,
  details,
  series,
  stonk,
  dbPortfolio,
  dbTnxs,
  setDbPortfolio,
  setDbTnxs,
}) {
  return (
    <div className="">
      <div className="">
        <div className="px-5 pt-3">
          <WatchlistSegment
            currentUser={currentUser}
            dbWatchlist={dbWatchlist}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
        <div
          className={`space-y-3 md:flex p-5 md:space-x-5 transition-all duration-500 top-0 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <div className=" md:w-3/5 lg:w-4/6 bg-gray-100 rounded-md">
            <Datagraph series={series} />
            <Trade
              dbPortfolio={dbPortfolio}
              dbTnxs={dbTnxs}
              setDbPortfolio={setDbPortfolio}
              setDbTnxs={setDbTnxs}
              currentUser={currentUser}
              stonk={stonk}
            />
          </div>
          <div className="bg-gray-800 shadow-md md:w-2/5 lg:w-2/6 rounded-md border dark:border-gray-700">
            <Details details={details} />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default MainContent;
