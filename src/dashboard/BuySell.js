import Trade from "../components/Trade";
import SideBarBtn from "../dashboard/SideBarBtn";
import Datagraph from "../components/Datagraph";
import Search from "../components/Search";
import { Outlet } from "react-router";

function BuySell({
  stonk,
  portfolio,
  setPortfolio,
  transactions,
  setTransactions,
  trades,
  setTrades,
  isSidebarOpen,
  setIsSidebarOpen,
  series,
  setSeries,
  setStonk,
  setDetails,
  setWatchlist,
  watchlist
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
          watchlist={watchlist} />
      </div>
      <div
        className={`transition-all duration-500 top-0 ${
          isSidebarOpen ? "left-64" : "left-0"
        }`}
      >
        <div className="md:ml-64">
          <div className="p-5 bg-gray-100 md:3/4 m-5 rounded-md">
            <Datagraph series={series} />
          </div>
          <div className="md:ml-64">
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
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default BuySell;
