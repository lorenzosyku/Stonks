import {useEffect} from 'react';

function PortfolioItem({stock, shares, percentage, prev, curr}) {
  useEffect(() => {
    percentage(prev, curr)
  }, [curr])
  let change = percentage(prev, curr)
  let tot = shares*curr
  return (
    // <div className="grid grid-cols-3 bg-gray-200 rounded-md my-2 p-1">
      
    //   <h2>{stock}</h2>
    //   <h3 className="flex justify-center">{shares}</h3>
    //   <h3 className="flex justify-end">{change.toFixed(2)}%</h3>
    //   <h3>{curr.toFixed(2)}</h3>
    // </div>
    <div className="flex bg-slate-50 m-5 border shadow-sm">
      <div className="bg-slate-200 flex justify-center items-center">
        <p>%{percentage}</p>
      </div>
      <div className="flex flex-col flex-grow space-y-3">
        <div className="flex justify-between items-center px-5 pt-2">
          <div>
            
            <p className="font-semibold">{stock}</p>
            <p className="text-sm text-stone-500">${curr.toFixed(2)}</p>
          </div>
          <div>
            <p className="font-semibold">{shares}</p>
            <p className="text-sm text-stone-500">${tot.toFixed(2)}</p>
          </div>
        </div>
        <div className="px-5 pb-2">
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-blue-600 text-xs w-1/4 font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
              
            >
              {" "}
              25%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
