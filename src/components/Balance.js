import PortfolioItem from "./PortfolioItem";

function Balance({ dbPortfolio }) {
  const percentage = (prevPrice, currPrice) => {
    return ((currPrice - prevPrice) / prevPrice) * 100;
  };

  return (
    <div>
      <div className="mt-5">
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
