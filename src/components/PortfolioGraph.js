import Chart from "react-apexcharts";

function PortfolioGraph({ setTrades, trades, dbPortfolio }) {
  //const dbArr = [...dbPortfolio]
  const arr = dbPortfolio.stocks;
  //console.log(arr)
  const arrOfStocks = arr?.map((stock) => stock.stockName);
  const valueOfEachInvesment = arr?.map(
    (stock) => stock.shares * stock.currentPrice
  );
  //console.log(valueOfEachInvesment);

  let labelsArray = ["CASH"];
  let seriesArray = [dbPortfolio.cash];

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
