import ReactApexChart from "react-apexcharts";
//mport { useState, useEffect } from "react";
//import moment from "moment";

function TotalReturnsGraph({ dbPortfolio, totPortfolio, setTotPortfolio }) {
 


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
        name: "Stock Portfolio",
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
      title: {
        align: "left",
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
    <div className="px-5 py-5">
      {/* <button onClick={newDataPoints}>total</button> */}
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
