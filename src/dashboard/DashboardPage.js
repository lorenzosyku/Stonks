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
  //user,
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
  const currentUser = useAuth();
  const [dbPortfolio, setDbPortfolio] = useState({});
  const [dbTnxs, setDbTnxs] = useState({});
  //const userId = user?.id;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snapshot = await getDoc(doc(db, "users", user.uid));
        console.log(snapshot.data());
        const dbData = snapshot.data();
        const portfolioDbData = dbData.portfolio;
        const transactionDbData = dbData.transactions;
        setDbPortfolio(portfolioDbData);
        setDbTnxs(transactionDbData);
      }
    });
    return () => unsub();
  }, []);

  console.log(dbPortfolio);
  console.log(dbTnxs);

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
              currentUser={currentUser}
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
              dbPortfolio={dbPortfolio}
              portfolio={portfolio}
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
