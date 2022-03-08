import "./App.css";
import Datagraph from "./components/Datagraph";
import Search from "./components/Search";
import { useState } from "react";
import Trade from "./components/Trade";
import Balance from "./components/Balance";
import PortfolioGraph from "./components/PortfolioGraph";
import TransactionList from "./components/TransactionList";
import TotalReturnsGraph from "./components/TotalReturnsGraph";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ResetPass from "./ResetPass";
import Header from "./LandingPageComponents/Header";
import TeztnetLogo from "./LandingPageComponents/TeztnetLogo";
import DashboardPage from "./DashboardPage";

function App() {
  const [portfolio, setPortfolio] = useState({
    cash: 10000,
    stocks: [],
  });
  const [transactions, setTransactions] = useState({
    stocksBought: [],
    stocksSold: [],
  });
  const [stonk, setStonk] = useState({
    symbol: "-",
    regularMarketPrice: "-.--",
    marketTime: "-:--",
  });
  const [trades, setTrades] = useState({
    totPortfolioValue: [10000],
    timestamp: [],
  });
  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);
  const [seriesBar, setSeriesBar] = useState([
    {
      name: "volume",
      data: [],
    },
  ]);

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={
              <LoginPage
                portfolio={portfolio}
                trades={trades}
                setTrades={setTrades}
                seriesBar={seriesBar}
                series={series}
              />
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/resetpass" element={<ResetPass />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>

      {/*  <Search
        stonk={stonk}
        setStonk={setStonk}
        setSeries={setSeries}
        setSeriesBar={setSeriesBar}
      />
      <Datagraph series={series} seriesBar={seriesBar} />
      <Trade
        stonk={stonk}
        portfolio={portfolio}
        setPortfolio={setPortfolio}
        transactions={transactions}
        setTransactions={setTransactions}
        trades={trades}
        setTrades={setTrades}
      />
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Balance portfolio={portfolio} />
        <PortfolioGraph
          portfolio={portfolio}
          trades={trades}
          setTrades={setTrades}
        />
      </div>

      <TotalReturnsGraph portfolio={portfolio} />
      <TransactionList transactions={transactions} />*/}
    </div>
  );
}

export default App;
