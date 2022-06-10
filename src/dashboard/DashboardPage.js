import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
import PortfolioSection from "./PortfolioSection";
import TransactionsSection from "./TransactionsSection";
import Search from "../components/Search";
import SideBarBtn from "./SideBarBtn";
import { doc, onSnapshot } from "@firebase/firestore";
import { auth, db, useAuth } from "../firebase";
import { onAuthStateChanged } from "@firebase/auth";

function DashboardPage({
  trades,
  setTrades,
  series,
  stonk,
  setStonk,
  setSeries,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const currentUser = useAuth();
  const [dbPortfolio, setDbPortfolio] = useState({});
  const [dbTnxs, setDbTnxs] = useState({});
  const [totPortfolio, setTotPortfolio] = useState();
  const [dbWatchlist, setDbWatchlist] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          console.log("Current data: ", doc.data());
          const dbData = doc.data();
          const portfolioDbData = dbData.portfolio;
          const transactionDbData = dbData.transactions;
          const watchlistDbData = dbData.watchList;
          setDbPortfolio(portfolioDbData);
          setDbTnxs(transactionDbData);
          setDbWatchlist(watchlistDbData);
        });
      }
    });
    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex bg-white min-h-screen ">
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
            currentUser={currentUser}
            setStonk={setStonk}
            setSeries={setSeries}
            setDetails={setDetails}
            dbWatchlist={dbWatchlist}
          />

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
                  dbWatchlist={dbWatchlist}
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
                  totPortfolio={totPortfolio}
                  setTotPortfolio={setTotPortfolio}
                  setTrades={setTrades}
                  trades={trades}
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
      </div>
    </div>
  );
}

export default DashboardPage;
