import {useEffect} from 'react';

function PortfolioItem({stock, shares, percentage, prev, curr}) {
  useEffect(() => {
    percentage(prev, curr)
  }, [curr])
  let change = percentage(prev, curr)
  return (
    <div className="grid grid-cols-3 bg-gray-200 rounded-md my-2 p-1">
      
      <h2>{stock}</h2>
      <h3 className="flex justify-center">{shares}</h3>
      <h3 className="flex justify-end">{change.toFixed(2)}%</h3>
    </div>
  )
}

export default PortfolioItem
