import "./App.css";
import { useState } from "react";
import LandingPage from "./LandingPageComponents/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./authorizationComponents/LoginPage";
import SignupPage from "./authorizationComponents/SignupPage";
import ResetPass from "./authorizationComponents/ResetPass";
import DashboardPage from "./dashboard/DashboardPage";

function App() {
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
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login/*"
            element={
              <LoginPage
                trades={trades}
                setTrades={setTrades}
                series={series}
                stonk={stonk}
                setStonk={setStonk}
                setSeries={setSeries}
              />
            }
          />
          <Route
            path="/dashboard/*"
            element={
              <DashboardPage
                trades={trades}
                setTrades={setTrades}
                stonk={stonk}
                setStonk={setStonk}
                series={series}
                setSeries={setSeries}
              />
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/resetpass" element={<ResetPass />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
