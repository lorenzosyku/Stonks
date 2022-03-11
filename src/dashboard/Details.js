import React from "react";

function Details({ details }) {
  return (
    <div className="p-3">
      <h1 className="font-semibold">Details:</h1>
      <div className="">
        <h2>stock symbol: {details?.symbol}</h2>
      </div>
      <div className="flex justify-between">
        <h2>stock price</h2> <h2>{details?.regularMarketPrice}$</h2>
      </div>
      <div className="flex justify-between">
        <h2>stock price</h2> <h2>{details?.regularMarketPrice}$</h2>
      </div>
      <div className="flex justify-between">
        <h2>stock price</h2> <h2>{details?.regularMarketPrice}$</h2>
      </div>
      <div className="flex justify-between">
        <h2>stock price</h2> <h2>{details?.regularMarketPrice}$</h2>
      </div>
      <div className="flex justify-between">
        <h2>stock price</h2> <h2>{details?.regularMarketPrice}$</h2>
      </div>
      <div className="flex justify-between">
        <h2>stock price</h2> <h2>{details?.regularMarketPrice}$</h2>
      </div>
    </div>
  );
}

export default Details;
