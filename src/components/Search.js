import { doc, updateDoc } from "@firebase/firestore";
import { useRef, useState } from "react";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
function Search({
  setStonk,
  setSeries,
  setDetails,
  dbWatchlist,
  setDbWatchlist,
  currentUser,
}) {
  const searchValue = useRef(null);
  const [readableTime, setReadableTime] = useState("-");

  const navtodashboard = useNavigate();

  const fetchStonk = async () => {
    const response = await fetch(
      `https://yahoo-finance-api.vercel.app/${searchValue.current.value}`
    );
    return response.json();
  };

  const handleStonk = async (e) => {
    e.preventDefault();

    try {
      const data = await fetchStonk();
      const stock = data.chart.result[0];
      console.log(stock);
      const stockName = stock.meta.symbol;
      const price = stock.meta.regularMarketPrice.toFixed(2);
      const time = new Date(stock.meta.regularMarketTime * 1000);
      setReadableTime(time);
      const prevClose = stock.meta.chartPreviousClose;
      const exchange = stock.meta.exchangeName;
      const range = stock.meta.range;
      const timeZone = stock.meta.timezone;
      const quotes = stock.indicators.quote[0];
      const exchangeTimeZone = stock.meta.exchangeTimezoneName;
      const arrPrices = stock?.timestamp?.map((timestamp, index) => ({
        x: new Date(timestamp * 1000),
        y: [
          quotes.open[index],
          quotes.high[index],
          quotes.low[index],
          quotes.close[index],
        ].map((num) => {
          return num ? +num.toFixed(2) : null;
        }),
      }));

      setStonk({
        symbol: stockName,
        regularMarketPrice: price,
        marketTime: time,
      });

      setDetails({
        symbol: stockName,
        regularMarketPrice: price,
        marketTime: time,
        timezone: timeZone,
        previousClose: prevClose,
        exchangeName: exchange,
        range: range,
        timezoneName: exchangeTimeZone,
      });

      setSeries([
        {
          data: arrPrices,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const addToWatchlist = (e) => {
    e.preventDefault();
    if (searchValue.current.value === "") return;
    const watchlist = dbWatchlist;
    const newItem = {
      id: new Date().getTime(),
      symbol: searchValue.current.value,
    };
    watchlist.unshift(newItem)

    const updateWatchList = async (user) => {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        watchList: watchlist,
      });
    };

    updateWatchList(currentUser);
  };

  return (
    <div className="px-1 py-3 md:w-3/2 bg-white flex justify-between">
      <div className="flex w-full justify-between items-center">
        <form
          type="submit"
          className="flex flex-grow justify-center items-center rounded-md w-1/2"
        >
          <button
            className="bg-zinc-400 md:inline-flex text-white rounded-full p-2 cursor-pointer md:mx-2"
            onClick={(e) => {
              handleStonk(e);
              navtodashboard("watchlist");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <input
            className="p-2 rounded-md flex-grow bg-transparent outline-none text-sm text-grey-400 placeholder-gray-400 border-none"
            type="text"
            ref={searchValue}
            placeholder="Stock Ticker"
          />
        </form>
        <button
          onClick={addToWatchlist}
          className="flex bg-zinc-400 md:inline-flex text-white rounded-full p-2 cursor-pointer mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Search;
