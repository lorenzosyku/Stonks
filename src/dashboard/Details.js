import React from "react";
import moment from "moment";

function Details({ details }) {
  return (
    <div className="p-3">
      <h1 className="font-semibold text-xl">Details:</h1>
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
      </div>
    </div>
  );
}

export default Details;
