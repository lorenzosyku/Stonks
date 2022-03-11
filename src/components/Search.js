import { useRef, useState, useEffect } from "react";
import moment from "moment";
import { auth, useAuth, signOut } from "../firebase";

function Search({ stonk, setStonk, setSeries, setSeriesBar, setDetails }) {
  const searchValue = useRef(null);
  const [readableTime, setReadableTime] = useState("-");

  const fetchStonk = async () => {
    const response = await fetch(
      `https://yahoo-finance-api.vercel.app/${searchValue.current.value}`
    );
    return response.json();
  };

  const handleStonk = async () => {
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
      const arrPrices = stock.timestamp.map((timestamp, index) => ({
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
      const volumeData = quotes.volume.filter((item) => item !== null);

      //console.log(readableTime);
      //console.log(quotes);
      //console.log(arrPrices);
      //console.log(volumeData)
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
      /*setSeriesBar([{
        name: 'volume',
        data: volumeData
      }])*/
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    searchValue.current.value = "";
  };

  const handleLogout = () => {
    return signOut(auth);
  };
  const currentUser = useAuth();

  return (
    <div className="flex justify-between">
      <div className="">
        <input type="text" ref={searchValue} placeholder="Stock Ticker" />
        <button
          className="bg-zinc-400 text-white p-1 rounded-md"
          onClick={() => {
            handleStonk();
            reset();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
        {/*<div className="">
          <h1>stock symbol: {stonk?.symbol}</h1>
          <h2>stock price: {stonk?.regularMarketPrice}$</h2>
          <h2>
            time: {moment(readableTime).format("MMMM Do YYYY, h:mm:ss a")}
          </h2>
        </div>*/}
      </div>
      <div className="flex flex-col justify-end items-center">
        <button
          onClick={handleLogout}
          className="bg-shade-lightblue font-semibold text-gray-100 p-2 shadow-lg rounded-md"
        >
          LogOut
        </button>
      </div>
    </div>
  );
}

export default Search;
