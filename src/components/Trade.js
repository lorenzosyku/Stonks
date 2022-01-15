import { useRef, useState } from "react";

function Trade({ stonk, portfolio, setPortfolio }) {
  const noSharesToBuy = useRef(null);
  const noSharesToSell = useRef(null);
  const [currentTrade, setCurrentTrade] = useState({
    from: "-",
    to: "-",
    amount: 0,
  });

  const buyShares = () => {
    const shares = parseInt(noSharesToBuy.current.value);
    if (shares <= 0) return;
    const price = stonk.regularMarketPrice;
    const amountToInvest = shares * price;

    //console.log(amountToInvest);

    setCurrentTrade({
      from: "FakeUSD",
      to: stonk.symbol,
      amount: amountToInvest,
    });

    const newPortfolio = { ...portfolio };

    const filterStocks = (arr) => {
      let newStockArr = [...arr];
      if (portfolio.cash - amountToInvest > 0) {
        newStockArr = [{ stockName: stonk.symbol, shares }, ...newStockArr];

        if (arr.length > 0) {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].stockName === stonk.symbol) {
              const newAmountShares = arr[i].shares + shares;
              newStockArr.splice(i, 2, {
                stockName: stonk.symbol,
                shares: newAmountShares,
              });

              return newStockArr;
            }
          }
        }

        newPortfolio.cash = portfolio.cash - amountToInvest;
        return newStockArr;
        
      } else {
        console.log("you dont have enough funds");
      }
    };

    const list = [...portfolio.stocks];

    const newStockList = filterStocks(list);
    newPortfolio.stocks = newStockList;

    setPortfolio(newPortfolio);

    noSharesToBuy.current.value = "";
  };
  console.log(portfolio);

  const sellShares = () => {
    const shares = noSharesToSell.current.value;
    if (shares <= 0) return;
    const price = stonk.regularMarketPrice;
    const amountToSell = shares * price;

    //console.log(amountToSell);

    setCurrentTrade({
      from: stonk.symbol,
      to: "FakeUSD",
      amount: amountToSell,
    });

    const newPortfolio = { ...portfolio };

    const filterStocks = (arr) => {
      const newStockArr = [...arr];

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].stockName === stonk.symbol) {
          if (shares > arr[i].shares) {
            console.log("you cant sell sheres you dont have");
          }
          if (shares <= arr[i].shares) {
            const newAmountShares = arr[i].shares - shares;
            newStockArr.splice(i, 1, {
              stockName: stonk.symbol,
              shares: newAmountShares,
            });
            newPortfolio.cash = portfolio.cash + amountToSell;
          }
        }
      }
      return newStockArr;
    };
    const list = [...portfolio.stocks];

    const newStockList = filterStocks(list);
    newPortfolio.stocks = newStockList;

    setPortfolio(newPortfolio);

    noSharesToSell.current.value = "";
  };

  return (
    <div>
      <div className="">
        <input
          type="number"
          ref={noSharesToBuy}
          placeholder={`Buy ${stonk.symbol} shares`}
        />
        <button onClick={buyShares}>buy</button>
      </div>
      <div className="">
        <input
          type="number"
          ref={noSharesToSell}
          placeholder={`Sell ${stonk.symbol} shares`}
        />
        <button onClick={sellShares}>sell</button>
      </div>
    </div>
  );
}

export default Trade;
