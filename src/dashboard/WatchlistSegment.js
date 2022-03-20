import { useEffect } from "react";

function WatchlistSegment({ watchlist, setWatchlist }) {
  useEffect(() => {
    const temp = localStorage.getItem("watchlist");
    const storedStocks = JSON.parse(temp);
    if (storedStocks) {
      setWatchlist(storedStocks);
    }
  }, [setWatchlist]);

  useEffect(() => {
    const temp = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", temp);
  }, [watchlist]);

  const deleteStock = (id) => {
    const updatedStockList = [...watchlist].filter((stock) => stock.id !== id);
    setWatchlist(updatedStockList);
  };

  return (
    <div className="ml-64 p-5">
      <h1 className="text-lg font-semibold ">Watchlist:</h1>
      <div className="flex bg-gray-100 rounded-md">
        {watchlist.map((stock) => {
          return (
            <div className="flex flex-col " key={stock.id}>
              {stock.symbol}
              {/*stock.close*/}
              <button className="remove" onClick={() => deleteStock(stock.id)}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WatchlistSegment;
