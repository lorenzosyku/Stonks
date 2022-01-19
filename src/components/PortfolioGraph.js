import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

function PortfolioGraph({ portfolio }) {
  let arr = [...portfolio.stocks];

  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);

  console.log(arr);

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

      /*for(let j=0; j<arr.length; j++){
        if(arr[j].stockName === stockSymbol){
          console.log(arr[j].currentPrice);
          arr[j].currentPrice = price;
          console.log(arr[j].currentPrice);
        }
      }
      console.log(price);*/

      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    {
      /*FIXME: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render. */
    }
    const handleData = () => {
      let labelsArr = arr.map((stock) => stock.stockName);
      labelsArr.unshift("cash");
      console.log(labelsArr);
    
      setLabels(labelsArr);
    
      let seriesArr = arr.map((stock) => stock.shares * stock.currentPrice);
      seriesArr.unshift(portfolio.cash);
      console.log(seriesArr);
    
      setSeries(seriesArr);
    }
    handleData()
  }, [])

  

  

  const chart = {
    series: series,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: labels,
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
