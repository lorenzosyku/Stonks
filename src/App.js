import "./App.css";
import { useState } from "react";
import Trade from "./components/Trade";
import Balance from "./components/Balance";
import PortfolioGraph from "./components/PortfolioGraph";
import TransactionList from "./components/TransactionList";
import TotalReturnsGraph from "./components/TotalReturnsGraph";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ResetPass from "./ResetPass";
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
  const [details, setDetails] = useState({});

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
                series={series}
                stonk={stonk}
                setStonk={setStonk}
                setSeries={setSeries}
                details={details}
                setDetails={setDetails}
                transactions={transactions}
              />
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/resetpass" element={<ResetPass />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>

      {/*  
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
