import Chart from "react-apexcharts";
//import { useState, useEffect, useMemo } from "react";

function PortfolioGraph({ portfolio }) {
  const arr = [...portfolio.stocks];
  const arrOfStocks = arr.map((stock) => stock.stockName);
  const valueOfEachInvesment = arr.map(
    (stock) => stock.shares * stock.currentPrice
  );
  console.log(arr);
  console.log(arrOfStocks);
  console.log(valueOfEachInvesment);

  const fetchStockPortfolioPrices = async (symbol) => {
    const response = await fetch(
      `https://yahoo-finance-api.vercel.app/${symbol}`
    );
    return response.json();
  };

  const getLatestPrice = async () => {
    try {
      for (let i = 0; i < arrOfStocks.length; i++) {
        const data = await fetchStockPortfolioPrices(arrOfStocks[i]);

        const stock = data.chart.result[0];
        const price = stock.meta.regularMarketPrice.toFixed(2);

        console.log(price);
      }
    } catch (error) {
      console.log(error);
    }
  };


  let labelsArray = ["CASH"];
  let seriesArray = [portfolio.cash];
  labelsArray = labelsArray.concat(arrOfStocks);
  seriesArray = seriesArray.concat(valueOfEachInvesment);


  const chart = {
    series: seriesArray,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: labelsArray,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <button onClick={getLatestPrice}>update</button>
      <Chart
        options={chart.options}
        series={chart.series}
        type="pie"
        width={320}
      />
    </div>
  );
}

export default PortfolioGraph;
