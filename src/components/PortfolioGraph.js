import { useEffect } from "react";
import Chart from "react-apexcharts";

function PortfolioGraph({ setTotto, dbPortfolio, totto }) {
  const arr = dbPortfolio.stocks;

  const arrOfStocks = arr?.map((stock) => stock.stockName);
  const valueOfEachInvesment = arr?.map(
    (stock) => stock.shares * stock.currentPrice
  );

  let labelsArray = ["CASH"];
  let seriesArray = [dbPortfolio.cash];

  labelsArray = labelsArray.concat(arrOfStocks);
  seriesArray = seriesArray.concat(valueOfEachInvesment);
  let z = seriesArray.reduce((a, b) => a + b);

  const tot = () => {
    let copy = totto;
    copy.push(z);

    const updatedList = [...copy].filter((val) => val !== NaN);

    setTotto(updatedList);
  };
  useEffect(() => {
    tot()
  }, [])

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
