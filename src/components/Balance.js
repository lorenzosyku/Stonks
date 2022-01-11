import PortfolioItem from './PortfolioItem';

function Balance({portfolio, setPortfolio}) {
  return (
    <div>
      <h2>${portfolio.cash}</h2>
      <div className="">
        {/*portfolio.stocks.map((item)=>(<PortfolioItem key={item.id} item={item} />))*/}
      </div>
    </div>
  )
}

export default Balance
