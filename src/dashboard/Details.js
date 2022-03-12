import React from "react";
import moment from 'moment'

function Details({ details }) {
  return (
    <div className="p-3">
      <h1 className="font-semibold">Details:</h1>
      <div className="flex justify-between">
        <h2>Symbol</h2>  <h2>{details?.symbol}</h2>
      </div>
      <div className="flex justify-between">
        <h2>Market Time</h2> <h2>{moment(details?.marketTime).format('LTS')}</h2>
      </div>
      <div className="flex justify-between">
        <h2>Price</h2> <h2>{details?.regularMarketPrice}$</h2>
      </div>
      <div className="flex justify-between">
        <h2>Previous Close</h2> <h2>{details?.previousClose}$</h2>
      </div>
      <div className="flex justify-between">
        <h2>Exchange</h2> <h2>{details?.exchangeName}</h2>
      </div>
      <div className="flex justify-between">
        <h2>Range</h2> <h2>{details?.range}</h2>
      </div>
      <div className="flex justify-between">
        <h2>Timezone</h2> <h2>{details?.timezoneName}</h2>
      </div>
    </div>
  );
}

export default Details;
