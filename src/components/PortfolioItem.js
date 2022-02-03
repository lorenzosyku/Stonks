import {useEffect} from 'react';

function PortfolioItem({stock, shares, percentage, prev, curr}) {
  useEffect(() => {
    percentage(prev, curr)
  }, [curr])
  let change = percentage(prev, curr)
  return (
    <div>
      
      <h2>{stock}</h2>
      <h3>{shares}</h3>
      <h4>{change.toFixed(2)}%</h4>
    </div>
  )
}

export default PortfolioItem
