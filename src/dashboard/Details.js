import React from "react";
import moment from "moment";

function Details({ details }) {
  return (
    <div className="">
      <div class="p-4 max-w-md bg-white rounded-lg shadow-md sm:p-8 dark:bg-gray-800 ">
        <div class="flex justify-between items-center mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Details
          </h5>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Symbol
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {details?.symbol}
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Market Time
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {moment(details?.marketTime).format("l")}
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Price
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  ${details?.regularMarketPrice}
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Previuos Close
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  ${details?.previousClose}
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Exchange
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {details?.exchangeName}
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Range
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {details?.range}
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Zone
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {details?.timezoneName}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/*<h1 className="font-semibold text-xl">Details:</h1>
      <div className="space-y-3">
        <div className="flex justify-between pt-10">
          <h2 className="text-gray-600 text-sm">Symbol</h2>{" "}
          <h2 className="font-semibold text-gray-800">{details?.symbol}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-600 text-sm">Market Time</h2>{" "}
          <h2 className="font-semibold text-gray-800">
            {moment(details?.marketTime).format("l")}
          </h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-600 text-sm">Price</h2>{" "}
          <h2 className="font-semibold text-gray-800">{details?.regularMarketPrice}$</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-600 text-sm">Previous Close</h2>{" "}
          <h2 className="font-semibold text-gray-800">{details?.previousClose}$</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-600 text-sm">Exchange</h2>{" "}
          <h2 className="font-semibold text-gray-800">{details?.exchangeName}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-600 text-sm">Range</h2>{" "}
          <h2 className="font-semibold text-gray-800">{details?.range}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-600 text-sm">Timezone</h2>{" "}
          <h2 className="font-semibold text-gray-800">{details?.timezoneName}</h2>
        </div>
  </div>*/}
    </div>
  );
}

export default Details;
