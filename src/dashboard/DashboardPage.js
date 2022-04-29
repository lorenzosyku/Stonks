import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
import PortfolioSection from "./PortfolioSection";
import TransactionsSection from "./TransactionsSection";
import Search from "../components/Search";
import SideBarBtn from "./SideBarBtn";
import { collection, doc, getDoc, onSnapshot } from "@firebase/firestore";
import { auth, db, useAuth } from "../firebase";
import { onAuthStateChanged } from "@firebase/auth";

function DashboardPage({
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
  const currentUser = useAuth();
  const [dbPortfolio, setDbPortfolio] = useState({});
  const [dbTnxs, setDbTnxs] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          console.log("Current data: ", doc.data());
          const dbData = doc.data();
          const portfolioDbData = dbData.portfolio;
          const transactionDbData = dbData.transactions;
          setDbPortfolio(portfolioDbData);
          setDbTnxs(transactionDbData);
        });
      }
    });
    return () => unsub();
  }, []);

  //console.log(dbPortfolio);
  //console.log(dbTnxs);

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
              dbPortfolio={dbPortfolio}
              dbTnxs={dbTnxs}
              setDbPortfolio={setDbPortfolio}
              setDbTnxs={setDbTnxs}
              currentUser={currentUser}
              isSidebarOpen={isSidebarOpen}
              setWatchlist={setWatchlist}
              watchlist={watchlist}
              details={details}
              series={series}
              setTrades={setTrades}
              stonk={stonk}
              trades={trades}
            />
          }
        />

        <Route
          path="portfolio"
          element={
            <PortfolioSection
              dbPortfolio={dbPortfolio}
              isSidebarOpen={isSidebarOpen}
            />
          }
        />
        <Route
          path="transactions"
          element={
            <TransactionsSection
              dbTnxs={dbTnxs}
              isSidebarOpen={isSidebarOpen}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default DashboardPage;
