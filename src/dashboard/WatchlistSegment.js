import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { XIcon } from "@heroicons/react/solid";

function WatchlistSegment({ dbWatchlist, isSidebarOpen, currentUser }) {
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
      className={`transition-all duration-500 top-0 ${
        isSidebarOpen ? "ml-64" : "ml-0"
      }`}
    >
      <div className="bg-white items-center rounded-md overflow-scroll scrollbar-hide mt-2">
        <h1 className="pl-3 pt-1 text-lg font-semibold ">Watchlist</h1>
        <div className="flex ">
          {dbWatchlist?.map((stock) => {
            return (
              <div
                className="flex justify-between items-center p-3 bg-slate-200 m-3 rounded-md"
                key={stock.id}
              >
                <h2 className="text-sm font-semibold uppercase">
                  {stock.symbol}
                </h2>
                {/*TODO:need a function that when you click gives you the same result as search function and as a default has displaying the last element of the watchlist array*/}
                <button
                  className="bg-zinc-400 md:inline-flex text-white rounded-full p-1 cursor-pointer md:mx-2"
                  onClick={() => deleteStock(stock.id)}
                >
                  <XIcon className="h-3 w-3 " />
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
