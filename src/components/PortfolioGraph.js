import Chart from "react-apexcharts";

function PortfolioGraph({ portfolio, setTrades, trades, dbPortfolio }) {
  //const dbArr = [...dbPortfolio]
  const arr = [...portfolio?.stocks];
  console.log(arr)
  const arrOfStocks = arr.map((stock) => stock.stockName);
  const valueOfEachInvesment = arr.map(
    (stock) => stock.shares * stock.currentPrice
  );

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
