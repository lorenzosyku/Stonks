import PortfolioItem from "./PortfolioItem";

function Balance({ portfolio }) {
  {/*TODO: implement proper key */}
  return (
    <div>
      <div className="">
        <h2>CASH BALANCE</h2>
        <h3>{portfolio.cash}</h3>
      </div>
      <div className="">
        <h2>STOCK LIST</h2>
        {portfolio?.stocks.map((stock)=>(<PortfolioItem key={stock.id} stock={stock.stockName} shares={stock.shares} />))}
      </div>
    </div>
  );
}

export default Balance;
