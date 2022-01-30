import { useRef, useEffect, useState } from "react";

function Trade({
  stonk,
  portfolio,
  setPortfolio,
  transactions,
  setTransactions,
  trades,
  setTrades,
}) {
  const noSharesToBuy = useRef(null);
  const noSharesToSell = useRef(null);


  const buyShares = () => {
    const shares = parseInt(noSharesToBuy.current.value);
    if (shares <= 0) return;
    const price = stonk.regularMarketPrice;
    const amountToInvest = shares * price;

    const newPortfolio = { ...portfolio };
    const newTrasactions = { ...transactions };

    const transactionListStocksBought = newTrasactions.stocksBought;

    if (portfolio.cash - amountToInvest > 0) {
      newTrasactions.stocksBought = [
        {
          stockName: stonk.symbol,
          shares: shares,
          id: new Date().getTime(),
          priceStock: parseFloat(price),
          amountSpent: amountToInvest.toFixed(2),
        },
        ...transactionListStocksBought,
      ];
    }
    setTransactions(newTrasactions);

    const filterStocks = (arr) => {
      let newStockArr = [...arr];
      if (portfolio.cash - amountToInvest > 0) {
        let newAmountShares = shares;
        let newAmountSpentOnStock = parseFloat(amountToInvest);
        let newPrice = parseFloat(price);
        let entryPointOfTrade = parseFloat(price);
        for (let i = 0; i < newStockArr.length; i++) {
          if (newStockArr[i].stockName === stonk.symbol) {
            newAmountShares = newStockArr[i].shares + newAmountShares;
            newAmountSpentOnStock = newStockArr[i].amountSpent + newAmountSpentOnStock;
            entryPointOfTrade = newAmountSpentOnStock / newAmountShares;
            //console.log(loweredEntryPointOfTrade)
            newStockArr.splice(i, 1);
          }
        }

        newStockArr = [
          {
            stockName: stonk.symbol,
            shares: newAmountShares,
            id: new Date().getTime(),
            currentPrice: newPrice,
            amountSpent: newAmountSpentOnStock,
            entryPrice: entryPointOfTrade,
          },
          ...newStockArr,
        ];
        newPortfolio.cash = portfolio.cash - amountToInvest;
        return newStockArr;
      } else {
        console.log("you dont have enough funds");
        return newStockArr;
      }
    };

    const list = [...portfolio.stocks];
    
    const newStockList = filterStocks(list);
    newPortfolio.stocks = newStockList;
    setPortfolio(newPortfolio);

    /*const initializedTrades = trades.enterTrade;
    trades.enterTrade = [
      {
        stockName: stonk.symbol,
        shares: shares,
        id: new Date().getTime(),
        priceStock: parseFloat(price),
        amountSpent: amountToInvest.toFixed(2),
      },
      ...initializedTrades
    ]
    */

    noSharesToBuy.current.value = "";
  };

  const sellShares = () => {
    const shares = noSharesToSell.current.value;
    if (shares <= 0) return;
    const price = stonk.regularMarketPrice;
    const amountToSell = shares * price;

    const newPortfolio = { ...portfolio };
    const newTrasactions = { ...transactions };

    const transactionListStocksSold = newTrasactions.stocksSold;

    const filterStocks = (arr) => {
      const newStockArr = [...arr];

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].stockName === stonk.symbol) {
          if (shares > arr[i].shares) {
            console.log("you cant sell sheres you dont have");
          }
          if (shares <= arr[i].shares) {
            newTrasactions.stocksSold = [
              {
                stockName: stonk.symbol,
                shares: shares,
                id: new Date().getTime(),
                priceStock: parseFloat(price),
                amountGained: amountToSell.toFixed(2),
              },
              ...transactionListStocksSold,
            ];

            setTransactions(newTrasactions);

            const newAmountShares = arr[i].shares - shares;
            newStockArr.splice(i, 1, {
              stockName: stonk.symbol,
              shares: newAmountShares,
              id: new Date().getTime(),
              currentPrice: parseFloat(price),
            });
            newPortfolio.cash = portfolio.cash + amountToSell;
          }
        }
      }
      return newStockArr;
    };
    const list = [...portfolio.stocks];
    
    const newStockList = filterStocks(list);

    const noZeroShares = () => {
      for (let j = 0; j < newStockList.length; j++) {
        if (newStockList[j].shares === 0) {
          newStockList.splice(j, 1);
        }
      }
      return newStockList;
    };
    noZeroShares(newStockList);

    newPortfolio.stocks = newStockList;
    setPortfolio(newPortfolio);

    noSharesToSell.current.value = "";
  };

  useEffect(() => {
    const temp = localStorage.getItem("portfolioAllocation")
    if(temp) {
      setPortfolio(JSON.parse(temp))
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("portfolioAllocation", JSON.stringify(portfolio));
  });

  
  console.log(portfolio);
  //console.log(transactions);

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
