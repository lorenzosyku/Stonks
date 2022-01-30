import "./App.css";
import Datagraph from "./components/Datagraph";
import Search from "./components/Search";
import { useState } from "react";
import Trade from "./components/Trade";
import Balance from "./components/Balance";
import PortfolioGraph from "./components/PortfolioGraph";
import TransactionList from "./components/TransactionList";
import TotalReturnsGraph from "./components/TotalReturnsGraph";

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
    enterTrade: [],
    exitTrade: [],
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
    <div className="App">
      <Search
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
      <div style={{display:'flex', justifyContent:"left"}}>
        <Balance portfolio={portfolio} />
        <PortfolioGraph portfolio={portfolio} />
      </div>

      <TotalReturnsGraph />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
