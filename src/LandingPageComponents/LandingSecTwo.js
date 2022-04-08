import { useState, useRef, useEffect } from "react";
import moment from "moment";
import Chart from "react-apexcharts";

function LandingSecTwo() {
  const [stonk, setStonk] = useState({});
  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);
  const [readableTime, setReadableTime] = useState("-");
  const searchValue = useRef(null);

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
      console.log(data);
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
    } catch (error) {
      console.log(error);
    }
  };

  const chart = {
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#528BC5",
            downward: "#fbbf24",
          },
        },
      },
    },
  };

  const reset = () => {
    searchValue.current.value = "";
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-8" id="markets">
      <div className="flex items-center justify-center px-3 py-10">
        <h1 className="text-3xl md:text-4xl font-poppins font-semibold ">
          Welcome back to the markets
        </h1>
      </div>
      <div className="md:flex">
        {
          <div className="md:w-3/5">
            <Chart options={chart.options} series={series} type="candlestick" />
            <div className="flex items-center justify-center py-5">
              <h2>{moment(readableTime).format("MMMM Do YYYY, h:mm:ss a")}</h2>
            </div>
          </div>
        }
        <div className="py-10 md:flex flex-col justify-center md:w-2/5">
          <div className="flex justify-center px-5">
            <input
              className="px-3 outline-none border-2 border-amber-400 flex flex-grow"
              type="text"
              ref={searchValue}
              placeholder="Stock Ticker"
            />
            <button
              className="bg-shade-lightblue text-white p-1"
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
          </div>
          {stonk.symbol && <div className="px-5 py-10">
            <div className="flex justify-between border-t-2 border-b-2 py-2 px-3">
              <h2>{stonk.symbol}</h2>
              <h2>{stonk.regularMarketPrice}$</h2>
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
}

export default LandingSecTwo;
