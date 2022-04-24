import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
import PortfolioSection from "./PortfolioSection";
import TransactionsSection from "./TransactionsSection";
import Search from "../components/Search";
import SideBarBtn from "./SideBarBtn";
import { doc, getDoc, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase";

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

  useEffect(() => {
    const docRef = doc(db, "users", "NvMHvTXqjtdl7YWxqXWLsC3O6vP2");
    const getData = onSnapshot(docRef, (doc) => {
      console.log("Current data: ", doc.data())
    });
    return () => getData();
  }, []);


  return (
    <div className="min-h-screen bg-gray-200">
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex bg-white items-center ">
        <SideBarBtn
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        <div
          className={`transition-all duration-500 flex-grow ${
            isSidebarOpen ? "ml-56" : "ml-0"
          }`}
        >
          <Search
            setStonk={setStonk}
            setSeries={setSeries}
            setDetails={setDetails}
            setWatchlist={setWatchlist}
            watchlist={watchlist}
          />
        </div>
      </div>

      <Routes>
        <Route
          path="watchlist"
          element={
            <MainContent
              isSidebarOpen={isSidebarOpen}
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
          element={
            <PortfolioSection
              portfolio={portfolio}
              isSidebarOpen={isSidebarOpen}
            />
          }
        />
        <Route
          path="transactions"
          element={
            <TransactionsSection
              transactions={transactions}
              isSidebarOpen={isSidebarOpen}
              setTransactions={setTransactions}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default DashboardPage;
