import Chart from "react-apexcharts";
//import { useState, useEffect, useMemo } from "react";

function PortfolioGraph({ portfolio }) {
  const arr = [...portfolio.stocks];

  //let portfolioWorth = portfolio.cash + stockListValue; //you may need this line to calculate how much your up on your initial investment

  const fetchStockPortfolioPrices = async () => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        let symbol = arr[i].stockName;
        console.log(symbol);
        const response = await fetch(
          `https://yahoo-finance-api.vercel.app/${symbol}`
        );
        return response.json();
      }
    } else {
      return;
    }
  };

  const getLatestPrice = async () => {
    try {
      const data = await fetchStockPortfolioPrices();

      const stock = data.chart.result[0];
      const stockSymbol = stock.meta.symbol;
      const price = stock.meta.regularMarketPrice.toFixed(2);

      for(let j=0; j<arr.length; j++){
        if(arr[j].stockName === stockSymbol){
          console.log(arr[j].currentPrice);
          arr[j].currentPrice = parseFloat(price);
        }
      }
      console.log(price);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePortfolio = () => {

  }

  let labelsArray = ['CASH'];
  let seriesArray = [portfolio.cash];

  const handleData = () => {
    let labelsArr = arr.map((stock) => stock.stockName);
    let seriesArr = arr.map((stock) => stock.shares * stock.currentPrice);
    
    labelsArray = labelsArray.concat(labelsArr);
    seriesArray = seriesArray.concat(seriesArr);
  };

  handleData();

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
