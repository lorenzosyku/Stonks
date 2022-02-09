import { useRef, useState, useEffect } from "react";
import moment from "moment";

function Search({ stonk, setStonk, setSeries, setSeriesBar }) {
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

      const stockName = stock.meta.symbol;
      const price = stock.meta.regularMarketPrice.toFixed(2);
      const time = new Date(stock.meta.regularMarketTime * 1000);
      setReadableTime(time);

      const quotes = stock.indicators.quote[0];
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

  return (
    <div>
      <div className="">
        <input type="text" ref={searchValue} placeholder="Stock Ticker" />
        <button
          className="bg-teal-400"
          onClick={() => {
            handleStonk();
            reset();
          }}
        >
          search stonk
        </button>
        <div className="">
          <h1>stock symbol: {stonk.symbol}</h1>
          <h2>stock price: {stonk.regularMarketPrice}$</h2>
          <h2>
            time: {moment(readableTime).format("MMMM Do YYYY, h:mm:ss a")}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Search;
