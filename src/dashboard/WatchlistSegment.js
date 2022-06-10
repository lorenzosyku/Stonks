import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { XIcon } from "@heroicons/react/solid";

function WatchlistSegment({ dbWatchlist, currentUser }) {
  const deleteStock = (id) => {
    const updatedList = [...dbWatchlist].filter((stocks) => stocks.id !== id);

    const updateWatchList = async (user) => {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        watchList: updatedList,
      });
    };

    updateWatchList(currentUser);
  };
  return (
    <div
    >

      <div className="bg-blue-50 items-center rounded-md overflow-scroll scrollbar-hide mt-2">
        <h1 className="text-sm pl-3 pt-1 md:text-lg font-semibold ">
          Watchlist
        </h1>
        <div className="flex ">
          {dbWatchlist?.map((stock) => {
            return (
              <div
                className="flex justify-between items-center p-3 bg-slate-200 m-3 rounded-md"
                key={stock.id}
              >
                <h2 className="text-xs md:text-sm font-semibold uppercase">
                  {stock.symbol}
                </h2>
                {/*TODO:need a function that when you click gives you the same result as search function and as a default has displaying the last element of the watchlist array*/}
                <button
                  className="md:bg-zinc-400 text-gray-800 md:inline-flex md:text-white rounded-full md:p-1 cursor-pointer mx-2"
                  onClick={() => deleteStock(stock.id)}
                >
                  <XIcon className="h-3 w-3 hover:bg-gray-200 hover:text-red-400" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WatchlistSegment;
