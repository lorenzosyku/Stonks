import ReactApexChart from "react-apexcharts";
import {useState, useEffect} from 'react';
import moment from 'moment';

function TotalReturnsGraph({ portfolio }) {

  const [totalPortfolioValue, setTotalPortfolioValue] = useState([]);
  const [time, setTime] = useState([]);

  let arrData = ['10000'];
  let portfolioWorth = arrData;
  //
  let start = moment(new Date()).format('L')
  let timestamps = [start];

  let timeoutId;
  const newDataPoints = () => {

    const arr = [...portfolio.stocks];
    const valueOfEachInvesment = arr.map(
      (stock) => stock.shares * stock.currentPrice
    );
    const cash = [portfolio.cash];
    const total = cash.concat(valueOfEachInvesment);
    const stockListValue = total.reduce((acc, val) => acc + val);
    portfolioWorth.push(stockListValue.toFixed(2));

    setTotalPortfolioValue(portfolioWorth);
    //timeoutId = setTimeout(newDataPoints, 5000 * 2);
    let d = moment(new Date()).format('L');
    timestamps.push(d);
    setTime(timestamps);
    //console.log(timestamps)
  };

  console.log(totalPortfolioValue)
  console.log(timestamps)

  /*useEffect(() => {
    newDataPoints()

    return () => {
      clearTimeout(timeoutId);
    };
  }, [])*/
  
  useEffect(() => {
    const temp = localStorage.getItem("totalPortfolioValueAllocation");
    if (temp) {
      setTotalPortfolioValue(JSON.parse(temp));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("totalPortfolioValueAllocation", JSON.stringify(totalPortfolioValue));
  });
  

  const chart = {
    series: [
      {
        name: "Desktops",
        data: totalPortfolioValue,
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
        text: "Portfolio Value",
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
