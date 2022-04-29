import PortfolioItem from "./PortfolioItem";

function Balance({ dbPortfolio }) {
  const cashBalance = dbPortfolio.cash;

  const percentage = (prevPrice, currPrice) => {
    return ((currPrice - prevPrice) / prevPrice) * 100;
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-semibold">CASH BALANCE</h2>
        <h3 className="font-bold italic">${cashBalance}</h3>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-3">
          <h2>Stock List</h2>
          <h2 className="flex justify-center">Shares</h2>
          <h2 className="flex justify-end">Percentage</h2>
        </div>

        {dbPortfolio?.stocks?.map((stock) => (
          <PortfolioItem
            key={stock.id}
            stock={stock.stockName}
            shares={stock.shares}
            prev={stock.entryPrice}
            curr={stock.currentPrice}
            percentage={percentage}
          />
        ))}
      </div>
    </div>
  );
}

export default Balance;
