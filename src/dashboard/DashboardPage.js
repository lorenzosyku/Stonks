import Sidebar from "./Sidebar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
import BuySell from "./BuySell";
import PortfolioSection from "./PortfolioSection";
import TransactionsSection from "./TransactionsSection";
import Prov from "../Prov";
import Search from "../components/Search";
import SideBarBtn from "./SideBarBtn";

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
  setPortfolio,
  transactions,
  setTransactions,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-200">
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="flex items-center">
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

      <Routes>
        <Route
          path="watchlist"
          element={
            <MainContent
              setIsSidebarOpen={setIsSidebarOpen}
              isSidebarOpen={isSidebarOpen}
              setStonk={setStonk}
              setSeries={setSeries}
              setDetails={setDetails}
              setWatchlist={setWatchlist}
              watchlist={watchlist}
              details={details}
              series={series}
              setTrades={setTrades}
              stonk={stonk}
              portfolio={portfolio}
              setPortfolio={setPortfolio}
              setTransactions={setTransactions}
              transactions={transactions}
              trades={trades}
            />
          }
        />
        
        <Route
          path="portfolio"
          element={<PortfolioSection portfolio={portfolio} />}
        />
        <Route
          path="transactions"
          element={<TransactionsSection transactions={transactions} />}
        />
      </Routes>
    </div>
  );
}

export default DashboardPage;