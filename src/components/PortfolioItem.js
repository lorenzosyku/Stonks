import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import { useEffect } from "react";

function PortfolioItem({ stock, shares, percentage, prev, curr }) {
  useEffect(() => {
    percentage(prev, curr);
  }, [curr]);
  let change = percentage(prev, curr);
  let tot = shares * curr;

  let spacing = 0;
  return (
    <div className="flex bg-slate-50 m-5 border shadow-sm rounded-md">
      <div className="flex justify-center items-center p-3">
        <p className={change >= 0 ? "text-green-600" : "text-red-600"}>
          {change >= 0 ? (
            <ArrowUpIcon className="text-green-600 h-5 w-5" />
          ) : (
            <ArrowDownIcon className="text-red-600 h-5 w-5" />
          )}
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
            <p className="font-semibold">
              {shares} <span className="text-sm text-stone-900">shares</span>
            </p>
            <p className="text-sm text-stone-500">${tot.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
