import { useEffect } from "react";

function PortfolioItem({ stock, shares, percentage, prev, curr }) {
  useEffect(() => {
    percentage(prev, curr);
  }, [curr]);
  let change = percentage(prev, curr);
  let tot = shares * curr;
  return (
    <div className="flex bg-slate-50 m-5 border shadow-sm">
      <div className="flex justify-center items-center p-3">
        <p className={change >= 0 ? "text-green-600" : "text-red-600"}>
          {change.toFixed(2)}%
        </p>
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
            <div className="bg-blue-600 text-xs w-1/4 font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full">
              {" "}
              25%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
