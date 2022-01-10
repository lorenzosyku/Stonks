import {useRef, useState, useEffect} from 'react';

function Search({stonk, setStonk}) {

  const searchValue = useRef(null);  
  const fetchStonk = async () => {
    const response = await fetch(`https://yahoo-finance-api.vercel.app/${searchValue.current.value}`);
    return response.json();
  };

  const handleStonk = async () => {
    try {
      const data = await fetchStonk();
      console.log(data); 
      const stock = data.chart.result[0];
      console.log(stock);
      const stockName = stock.meta.symbol;
      console.log(stockName);
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <div>
      <div className="">
        <input 
          type="text" 
          ref={searchValue}
        />
        <button onClick={()=> handleStonk()}>search stonk</button>
      </div>
    </div>
  )
}

export default Search
