import Sidebar from "./dashboard/Sidebar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "./dashboard/MainContent";
import BuySell from "./dashboard/BuySell";

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
    <div className="min-h-screen bg-gray-300">
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
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
      {/*<BuySell
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        setStonk={setStonk}
        stonk={stonk}
        setSeries={setSeries}
        series={series}
        portfolio={portfolio}
        setPortfolio={setPortfolio}
        transactions={transactions}
        setTransactions={setTransactions}
        trades={trades}
        setTrades={setTrades}
      />*/}
    </div>
  );
}

export default DashboardPage;
