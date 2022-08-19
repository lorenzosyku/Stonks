import { useEffect } from "react";
import Chart from "react-apexcharts";

function PortfolioGraph({ setTotto, dbPortfolio, totto, karamba }) {
  const arr = dbPortfolio.stocks;

  const arrOfStocks = arr?.map((stock) => stock.stockName);
  const valueOfEachInvesment = arr?.map(
    (stock) => stock.shares * stock.currentPrice
  );

  let labelsArray = ["CASH"];
  let seriesArray = [dbPortfolio.cash];

  labelsArray = labelsArray.concat(arrOfStocks);
  seriesArray = seriesArray.concat(valueOfEachInvesment);
  console.log(seriesArray)
  let z = seriesArray.reduce((a, b) => a + b);
  console.log(z)
  let o = [...karamba, z]
  console.log(o)
  karamba.push(z)
  console.log(karamba)



  // const tot = () => {
  //   let copy = totto;
  //   copy.push(z);
  //   console.log(z)
  //   const updatedList = [...copy].filter((val) => val !== NaN);

  //   setTotto(updatedList);
    
  // };//console.log(totto)
  // useEffect(() => {
  //   tot()
  // }, [])
  
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
