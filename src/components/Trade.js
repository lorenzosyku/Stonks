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

    const list = [...portfolio.stocks];
    const newPortfolio = { ...portfolio };

    if (portfolio.cash - amountToInvest > 0) {
      newPortfolio.cash = portfolio.cash - amountToInvest;

      /*for(i=0;i<list.length;i++) {
        if(stonk.symbol === list[i].stockName){
          newPortfolio.stocks = noDuplicateList
        }
      }
      newPortfolio.stocks = [{stockName: stonk.symbol, shares}, ...list];
      
      [
        { stockName: "TSLA", shares: 21 },
        { stockName: "W", shares: 11 },
        { stockName: "WE", shares: 14 },
        { stockName: "QQQ", shares: 17 },
      ]
         
      */
      
      const noDuplicateList = list.map((stock) => {
        let tot = shares;
        if (stonk.symbol === stock.stockName) {
          tot += stock.shares;
          console.log(tot);
          stock.shares = tot;
          return { stockName: stonk.symbol, shares: tot };
        }
        return stock;
      });
      //newPortfolio.stocks = [ {stockName: stonk.symbol, shares}, ...noDuplicateList];

      for(let i=0;i<list.length;i++) {
        if(stonk.symbol === list[i].stockName){
          newPortfolio.stocks = noDuplicateList
        }
        newPortfolio.stocks = [{stockName: stonk.symbol, shares}, ...list];
      }
      
      
      setPortfolio(newPortfolio);
    } else {
      console.log("you dont have enough funds");
    }

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
