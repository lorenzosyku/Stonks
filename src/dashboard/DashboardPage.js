import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
import PortfolioSection from "./PortfolioSection";
import TransactionsSection from "./TransactionsSection";
import Search from "../components/Search";
import SideBarBtn from "./SideBarBtn";
import { doc, getDoc, onSnapshot } from "@firebase/firestore";
import { db, useAuth } from "../firebase";

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
  const currentUser = useAuth();
  const [dbPortfolio, setDbPortfolio] = useState({});
  const [dbTnxs, setDbTnxs] = useState({});

  useEffect(() => {
    //console.log(currentUser);
    const id = currentUser?.uid;
    console.log(id);

    const docRef = doc(db, "users", "L9y27TYivKQ3Lv619CP59XwOeY32");
    const getData = onSnapshot(docRef, (doc) => {
      //console.log("Current data: ", doc.data());
      const dbData = doc.data();

      const portfolioDbData = dbData.portfolio;
      const transactionsdbData = dbData.transactions;

      setDbPortfolio(portfolioDbData);
      setDbTnxs(transactionsdbData);
    });
    return () => getData();
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
