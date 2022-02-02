import ReactApexChart from "react-apexcharts";

function TotalReturnsGraph({ portfolio }) {
  //let portfolioWorth = portfolio.cash + stockListValue; //you may need this line to calculate how much your up on your initial investment
  let arrData = [10000];
  let portfolioWorth = arrData;
  const newDataPoints = () => {
    const arr = [...portfolio.stocks];
    const valueOfEachInvesment = arr.map(
      (stock) => stock.shares * stock.currentPrice
    );
    const cash = [portfolio.cash];
    const total = cash.concat(valueOfEachInvesment);
    const stockListValue = total.reduce((acc, val) => acc + val);
    portfolioWorth.push(stockListValue);
    return portfolioWorth;
  };

  //console.log(portfolioWorth);

  const chart = {
    series: [
      {
        name: "Desktops",
        data: [10000, 10345, 10488],
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
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };

  return (
    <div>
      <button onClick={newDataPoints}>total</button>
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
