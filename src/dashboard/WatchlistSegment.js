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
    <div>
      <h1 className="title">Watchlist:</h1>

      {watchlist.map((stock) => {
        return (
          <div className="stock" key={stock.id}>
            {stock.text}
            {stock.close}
            <button className="remove" onClick={() => deleteStock(stock.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default WatchlistSegment;
