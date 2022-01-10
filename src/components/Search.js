import {useRef, useState, useEffect} from 'react';
import moment from 'moment';

function Search({stonk, setStonk}) {

  const searchValue = useRef(null);  

  const fetchStonk = async () => {
    const response = await fetch(`https://yahoo-finance-api.vercel.app/${searchValue.current.value}`);
    return response.json();
  };

  const handleStonk = async () => {
    try {
      const data = await fetchStonk(); 
      const stock = data.chart.result[0];
      console.log(stock);
      const stockName = stock.meta.symbol;
      const price = stock.meta.regularMarketPrice.toFixed(2);
      const readableTime = moment.unix(new Date(stock.meta.regularMarketTime)).format('LLL')

      console.log(stockName);
      console.log(price)
      //console.log(time)

      setStonk({
        symbol: stockName,
        regularMarketPrice: price,
        marketTime: readableTime,
      })
    } catch (error) {
      console.log(error)
    }
  };

  const reset = () => {
    searchValue.current.value = "";
  };

  return (
    <div>
      <div className="">
        <input 
          type="text" 
          ref={searchValue}
        />
        <button onClick={()=> {handleStonk(); reset()}}>search stonk</button>

        <h1>stock symbol: {stonk.symbol}</h1>
        <h2>stock price: {stonk.regularMarketPrice}$</h2>
        <h2>time: {stonk.marketTime}</h2>
      </div>
    </div>
  )
}

export default Search
