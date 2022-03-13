import Chart from "react-apexcharts";

function Datagraph({ series }) {
  const chart = {
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
    },
  };

  return (
    <div>
      <Chart options={chart.options} series={series} type="candlestick" />
    </div>
  );
}

export default Datagraph;
