import ReactApexChart from "react-apexcharts";
//import { useState, useEffect } from "react";
//import moment from "moment";

function TotalReturnsGraph({ dbPortfolio, totPortfolio, setTotPortfolio }) {
  let values = [];
 
  const arr = dbPortfolio.stocks;
  const arrOfStocks = arr?.map((stock) => stock.stockName);

  const fetchStockPortfolioPrices = async (symbol) => {
    const response = await fetch(
      `https://yahoo-finance-api.vercel.app/${symbol}`
    );
    return response.json();
  };
  let tot = 0;

  const getLatestPrice = async () => {
    try {
      for (let i = 0; i < arrOfStocks.length; i++) {
        const data = await fetchStockPortfolioPrices(arrOfStocks[i]);

        const stock = data.chart.result[0];
        const price = stock.meta.regularMarketPrice;

        arr[i].currentPrice = price;

        const newVal = arr[i].shares * arr[i].currentPrice;
        tot += newVal;
      }
      tot += dbPortfolio?.cash;
      setTotPortfolio(tot)
      values.push(tot)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(totPortfolio)
  console.log(values)




  // useEffect(() => {
  //   const temp = localStorage.getItem("totalPortfolioValueAllocation");
  //   if (temp) {
  //     setTotalPortfolioValue(JSON.parse(temp));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "totalPortfolioValueAllocation",
  //     JSON.stringify(totalPortfolioValue)
  //   );
  // });

  const chart = {
    series: [
      {
        name: "Stock Portfolio + Cash",
        data: [10000,9822,9545,9389],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
    },
  };

  return (
    <div className="px-5 ">
      <button onClick={getLatestPrice}>total</button>
      <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default TotalReturnsGraph;
