import {useRef, useState} from 'react';

function Trade({stonk, portfolio, setPortfolio}) {

  const noSharesToBuy = useRef(null);
  const noSharesToSell = useRef(null);
  const [currentTrade, setCurrentTrade] = useState({
    from: '-',
    to: '-',
    amount: 0
  });

  const buyShares = () => {

    const shares = parseInt(noSharesToBuy.current.value);
    const price = stonk.regularMarketPrice;
    const amountToInvest = shares * price;

    console.log(amountToInvest);
    
    setCurrentTrade({
      from: 'FakeUSD',
      to: stonk.symbol,
      amount: amountToInvest
    });

    const newPortfolio = {...portfolio};
    if(portfolio.cash-amountToInvest>0){
      newPortfolio.cash = portfolio.cash - amountToInvest;
      newPortfolio.stocks = [...portfolio.stocks, stonk.symbol];

      setPortfolio(newPortfolio);
    } else {
      console.log('you dont have enough funds')
    }
    
    

    noSharesToBuy.current.value = "";
  };
  console.log(portfolio);

  const sellShares = () => {
    
    const shares = parseInt(noSharesToSell.current.value);
    const price = stonk.regularMarketPrice;
    const amountToSell = shares * price;

    console.log(amountToSell);

    setCurrentTrade({
      from: stonk.symbol,
      to: 'FakeUSD',
      amount: amountToSell
    })

    noSharesToSell.current.value = "";
  };

  return (
    <div>
      <div className="">
        <input type="number" ref={noSharesToBuy} placeholder={`Buy ${stonk.symbol} shares`} />
        <button onClick={buyShares}>buy</button>
      </div>
      <div className="">
        <input type="number" ref={noSharesToSell} placeholder={`Sell ${stonk.symbol} shares`} />
        <button onClick={sellShares}>sell</button>
      </div>
    </div>
  )
}

export default Trade
