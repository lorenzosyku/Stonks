import React from "react";
import moment from "moment";

function Details({ details }) {
  return (
    
      <div className="p-3 bg-white rounded-lg dark:bg-gray-800 ">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Details
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Symbol
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                  {details?.symbol}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Market Time
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                  {moment(details?.marketTime).format("l")}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Price
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                  ${details?.regularMarketPrice}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Previuos Close
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                  ${details?.previousClose}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Exchange
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                  {details?.exchangeName}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Range
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                  {details?.range}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Zone
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                  {details?.timezoneName}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    
  );
}

export default Details;
