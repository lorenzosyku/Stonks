import PortfolioItem from "./PortfolioItem";
import { useEffect, useState } from "react";

function Balance({ portfolio }) {
  const cashBalance = portfolio.cash;

  const percentage = (prevPrice, currPrice) => {
    return (currPrice-prevPrice)/prevPrice * 100
  }

  //console.log(percentage(100,160))

  return (
    <div>
      <div className="">
        <h2>CASH BALANCE</h2>
        <h3>${cashBalance.toFixed(2)}</h3>
      </div>
      <div className="">
        <h2>STOCK LIST</h2>
        {portfolio?.stocks.map((stock) => (
          <PortfolioItem
            key={stock.id}
            stock={stock.stockName}
            shares={stock.shares}
            prev={stock.entryPrice}
            curr={stock.currentPrice}
            percentage={percentage}
          />
        ))}
      </div>
    </div>
  );
}

export default Balance;
