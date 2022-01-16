import Chart from "react-apexcharts";
import {useState} from 'react'

function PortfolioGraph({ portfolio }) {

  //const [series, setS] = useState()
  let stockListValue = portfolio.stocks.shares //* value of the stock for each stock
  //then series: [portfolio.cash, stock1, stock2,...]
  let portfolioWorth = portfolio.cash + stockListValue//you may need this line to calculate how much your up on your initial investment

  const chart = {
          
    series: [44, 55, 13, 43, 22, 101, 88],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'guxhi', 'muxhi'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
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
  )
}

export default PortfolioGraph;