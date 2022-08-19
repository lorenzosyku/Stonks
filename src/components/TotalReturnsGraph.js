import ReactApexChart from "react-apexcharts";

function TotalReturnsGraph({
  dbPortfolio,
  karamba,
  totPortfolio,
  setTotPortfolio,
  totto,
}) {
  const arr = dbPortfolio.stocks;
  console.log(arr);
  const arrOfStocks = arr?.map((stock) => stock.stockName);

  const fetchStockPortfolioPrices = async (symbol) => {
    const response = await fetch(
      `https://yahoo-finance-api.vercel.app/${symbol}`
    );
    return response.json();
  };

  const getLatestPrice = async () => {
    try {
      for (let i = 0; i < arrOfStocks.length; i++) {
        const data = await fetchStockPortfolioPrices(arrOfStocks[i]);

        const stock = data.chart.result[0];
        const price = stock.meta.regularMarketPrice;

        arr[i].currentPrice = price;
        console.log(price);
      }
      // const updateFirestore = async (user) => {
      //   const docRef = doc(db, "users", user?.uid);
      //   await updateDoc(docRef, {
      //     "portfolio.cash": dbPortfolio.cash,
      //     "portfolio.stocks": dbPortfolio.stocks,
      //     "transactions.stocksBought": dbTnxs?.stocksBought,
      //     "transactions.stocksSold": dbTnxs?.stocksSold,
      //   });
      // };
    } catch (error) {
      console.log(error);
    }
  };

  const chart = {
    series: [
      {
        name: "Stock Portfolio + Cash",
        data: karamba,
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
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
    },
  };

  return (
    <div className="px-5 ">
      <button onClick={() => getLatestPrice()}>total</button>
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
