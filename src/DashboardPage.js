import Sidebar from "./dashboard/Sidebar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "./dashboard/MainContent";
import BuySell from "./dashboard/BuySell";
import PortfolioSection from "./dashboard/PortfolioSection";
import TransactionsSection from "./dashboard/TransactionsSection";
import Prov from "./Prov";
import Sellbuy from "./Sellbuy";
import Wl from "./Wl";
import Pipi from "./Pipi";

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
      {/*<MainContent
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
      />*/}
      {/*<BuySell
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
      <PortfolioSection portfolio={portfolio}/>
      <TransactionsSection transactions={transactions} />*/}
      <Routes>
        <Route path="watchlist" element={<Prov />}/>
        <Route path="trade" element={<Sellbuy />} />
        <Route path="portfolio" element={<Wl/>} />
        <Route path="transactions" element={<Pipi />} />
      </Routes>
    </div>
  );
}

export default DashboardPage;
