import { doc, onSnapshot, updateDoc } from "@firebase/firestore";
import { useRef, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { db } from "../firebase";

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
    //const newTrades = { ...trades};

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
        let entryPointOfTrade = newPrice;
        //console.log(entryPointOfTrade);
        for (let i = 0; i < newStockArr.length; i++) {
          if (newStockArr[i].stockName === stonk.symbol) {
            newAmountShares = newStockArr[i].shares + newAmountShares;
            //console.log(newAmountShares);
            newAmountSpentOnStock =
              newStockArr[i].amountSpent + newAmountSpentOnStock;
            //console.log(newAmountSpentOnStock);
            entryPointOfTrade = newAmountSpentOnStock / newAmountShares;
            //console.log(entryPointOfTrade);
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

        toast("HOORAY...You successfully Bought!!", {
          duration: 5000,
          style: {
            background: "green",
            color: "white",
            fontWeight: "bolder",
            fontSize: "17px",
            padding: "20px",
          },
        });
        return newStockArr;
      } else {
        toast("Whoops...you dont have enough funds!", {
          style: {
            background: "red",
            color: "white",
            fontWeight: "bolder",
            fontSize: "17px",
            padding: "20px",
          },
        });
        console.log("you dont have enough funds");
        return newStockArr;
      }
    };

    const list = [...portfolio.stocks];
    let tnxs = newTrasactions.stocksBought;
    const newStockList = filterStocks(list);
    let newCash = portfolio.cash - amountToInvest;
    newPortfolio.stocks = newStockList;
    setPortfolio(newPortfolio);

    const updateFirestore = async () => {
      const docRef = doc(db, "users", "NvMHvTXqjtdl7YWxqXWLsC3O6vP2");
      await updateDoc(docRef, {
        "portfolio.cash": newCash,
        "portfolio.stocks": newStockList,
        "transactions.stocksBought": tnxs,
      });
    };

    updateFirestore();

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
            toast("Whoops...you can not sell sheres you dont have!", {
              style: {
                background: "red",
                color: "white",
                fontWeight: "bolder",
                fontSize: "17px",
                padding: "20px",
              },
            });
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
            //const entryPointOfTrade = arr[i].entryPrice;
            newStockArr.splice(i, 1, {
              stockName: stonk.symbol,
              shares: newAmountShares,
              amountGained: amountToSell,
              id: new Date().getTime(),
              currentPrice: parseFloat(price),
              amountSpent: arr[i].amountSpent,
              entryPrice: arr[i].entryPrice,
            });
            newPortfolio.cash = portfolio.cash + amountToSell;

            toast("HOORAY...You successfully sold!!", {
              duration: 5000,
              style: {
                background: "green",
                color: "white",
                fontWeight: "bolder",
                fontSize: "17px",
                padding: "20px",
              },
            });
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
    let tnxs = newTrasactions.stocksSold;
    let newCash = portfolio.cash + amountToSell;
    setPortfolio(newPortfolio);

    const updateFirestore = async () => {
      const docRef = doc(db, "users", "NvMHvTXqjtdl7YWxqXWLsC3O6vP2");
      await updateDoc(docRef, {
        "portfolio.cash": newCash,
        "portfolio.stocks": newStockList,
        "transactions.stocksSold": tnxs,
      });
    };

    updateFirestore();

    noSharesToSell.current.value = "";
  };

  const arr = [...portfolio.stocks];
  const arrOfStocks = arr.map((stock) => stock.stockName);

  const fetchStockPortfolioPrices = async (symbol) => {
    const response = await fetch(
      `https://yahoo-finance-api.vercel.app/${symbol}`
    );
    return response.json();
  };

  //let timeoutId;
  const getLatestPrice = async () => {
    try {
      for (let i = 0; i < arrOfStocks.length; i++) {
        const data = await fetchStockPortfolioPrices(arrOfStocks[i]);

        const stock = data.chart.result[0];
        const price = stock.meta.regularMarketPrice;

        console.log(arr[i].stockName);
        console.log(price);
        arr[i].currentPrice = price;
        portfolio.stocks = arr;
        console.log(portfolio);
      }
    } catch (error) {
      console.log(error);
    }
    //timeoutId = setTimeout(getLatestPrice, 24000 * 2);
  };

  /*useEffect(() => {
    getLatestPrice()

    return () => {
      clearTimeout(timeoutId);
    };
  }, [])*/

  useEffect(() => {
    const docRef = doc(db, "users", "NvMHvTXqjtdl7YWxqXWLsC3O6vP2");

    /*const getBooks = onSnapshot(docRef, (snapshot) => {
      let result = [];
      snapshot.docs.map((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      //setBooks(result);
    });
    return () => getBooks();*/
  }, []);

  /*useEffect(() => {
    const temp = localStorage.getItem("portfolioAllocation");
    if (temp) {
      setPortfolio(JSON.parse(temp));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolioAllocation", JSON.stringify(portfolio));
  });*/

  console.log(portfolio);

  /*useEffect(() => {
    const temp = localStorage.getItem("tnxAllocation");
    if (temp) {
      setTransactions(JSON.parse(temp));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tnxAllocation", JSON.stringify(transactions));
  });*/

  //console.log(transactions);

  return (
    <div className="flex justify-between items-center border-2 p-5">
      <Toaster position="bottom-center" />
      <div className="flex items-center">
        <input
          type="number"
          ref={noSharesToBuy}
          placeholder={`Buy ${stonk.symbol} shares`}
          className="border-2 bg-transparent border-cyan-600 rounded-md p-1 text-sm font-semibold outline-none"
        />
        <button
          className="p-1 bg-orange-300 rounded-md text-sm text-white font-bold ml-2"
          onClick={buyShares}
        >
          buy
        </button>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          ref={noSharesToSell}
          placeholder={`Sell ${stonk.symbol} shares`}
          className="border-2 bg-transparent border-cyan-600 rounded-md p-1 text-sm font-semibold outline-none"
        />
        <button
          className="p-1 bg-orange-300 rounded-md text-sm text-white font-bold ml-2"
          onClick={sellShares}
        >
          sell
        </button>
        {/*<button onClick={getLatestPrice}>updateToLatestPrices</button>*/}
      </div>
    </div>
  );
}

export default Trade;
