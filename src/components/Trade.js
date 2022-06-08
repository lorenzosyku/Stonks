import { doc, updateDoc } from "@firebase/firestore";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { db } from "../firebase";

function Trade({
  stonk,
  currentUser,
  dbPortfolio,
  dbTnxs,
  setDbPortfolio,
  setDbTnxs,
}) {
  const noSharesToBuy = useRef(null);
  const noSharesToSell = useRef(null);

  const buyShares = () => {
    const shares = parseInt(noSharesToBuy.current.value);
    if (shares <= 0) return;
    const price = stonk.regularMarketPrice;
    const amountToInvest = shares * price;

    const newPortfolio = { ...dbPortfolio };
    const newTrasactions = { ...dbTnxs };

    const transactionListStocksBought = newTrasactions.stocksBought;

    if (dbPortfolio.cash - amountToInvest > 0) {
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
    setDbTnxs(newTrasactions);

    const filterStocks = (arr) => {
      let newStockArr = [...arr];
      if (dbPortfolio.cash - amountToInvest > 0) {
        let newAmountShares = shares;
        let newAmountSpentOnStock = parseFloat(amountToInvest);
        let newPrice = parseFloat(price);
        let entryPointOfTrade = newPrice;

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
        newPortfolio.cash = dbPortfolio.cash - amountToInvest;

        toast.success("You successfully Bought!!");
        return newStockArr;
      } else {
        toast.error("Whoops...you dont have enough funds!");
        //console.log("you dont have enough funds");
        return newStockArr;
      }
    };

    const list = [...dbPortfolio.stocks];
    const newStockList = filterStocks(list);
    newPortfolio.stocks = newStockList;
    setDbPortfolio(newPortfolio);
    //console.log(dbPortfolio)

    noSharesToBuy.current.value = "";
  };

  const sellShares = () => {
    const shares = noSharesToSell.current.value;
    if (shares <= 0) return;
    const price = stonk.regularMarketPrice;
    const amountToSell = shares * price;

    const newPortfolio = { ...dbPortfolio };
    const newTrasactions = { ...dbTnxs };

    const transactionListStocksSold = newTrasactions.stocksSold;

    const filterStocks = (arr) => {
      const newStockArr = [...arr];

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].stockName === stonk.symbol) {
          if (shares > arr[i].shares) {
            toast.error("Whoops...you can not sell sheres you dont have!");
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

            setDbTnxs(newTrasactions);

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
            newPortfolio.cash = dbPortfolio.cash + amountToSell;

            toast.success("You successfully sold!!");
          }
        }
      }

      return newStockArr;
    };
    const list = [...dbPortfolio.stocks];

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
    setDbPortfolio(newPortfolio);
    //console.log(dbPortfolio)

    noSharesToSell.current.value = "";
  };

  const updateFirestore = async (user) => {
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, {
      "portfolio.cash": dbPortfolio.cash,
      "portfolio.stocks": dbPortfolio.stocks,
      "transactions.stocksBought": dbTnxs?.stocksBought,
      "transactions.stocksSold": dbTnxs?.stocksSold,
    });
  };

  updateFirestore(currentUser);

  console.log(dbPortfolio);

  return (
    <div className="flex justify-between items-center p-2 mt-2 border-2 md:p-5">
      <Toaster />
      <div className="flex items-center">
        <input
          type="number"
          ref={noSharesToBuy}
          placeholder={`Buy ${stonk.symbol} shares`}
          className="w-[80px] text-xs border-2 bg-transparent border-cyan-600 rounded-md p-1 md:text-sm font-semibold outline-none"
        />
        <button
          className="text-xs p-1 bg-orange-300 rounded-md md:text-sm text-white font-bold ml-2"
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
          className="w-[80px] text-xs border-2 bg-transparent border-cyan-600 rounded-md p-1 md:text-sm font-semibold outline-none"
        />
        <button
          className="text-xs p-1 bg-orange-300 rounded-md md:text-sm text-white font-bold ml-2"
          onClick={sellShares}
        >
          sell
        </button>
      </div>
    </div>
  );
}

export default Trade;
