//import { useEffect } from "react";
import { collection, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function WatchlistSegment({ watchlist, setWatchlist, isSidebarOpen, currentUser }) {
  // useEffect(() => {
  //   const watchlistRef = doc(db, "users", user.uid);

  //   const getWatchlist = onSnapshot(watchlistRef, (snapshot) => {
  //     let result = [];
  //     snapshot.docs.map((doc) => {
  //       result.push({ ...doc.data(), id: doc.id });
  //     });
  //     setWatchlist(result);
  //   });
  //   return () => getWatchlist(currentUser);
  // }, []);

  const deleteStock = (id) => {
    const updatedWatchlist = [...watchlist].filter((item) => item.id !== id);
    setWatchlist(updatedWatchlist)
  };

  const updateWatchList = async (user) => {
    const docRef = doc(db, "users", user.uid);
    let res = watchlist
    await updateDoc(docRef, {
      "watchList": res
    });

  };

  updateWatchList(currentUser);

  return (
    <div
      className={`transition-all duration-500 top-0 ${
        isSidebarOpen ? "ml-64" : "ml-0"
      }`}
    >
      <div className="bg-white items-center rounded-md overflow-scroll scrollbar-hide mt-2">
        <h1 className="pl-3 pt-1 text-lg font-semibold ">Watchlist</h1>
        <div className="flex ">
          {watchlist.map((stock) => {
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
                  className="p-1 mx-2"
                  onClick={() => deleteStock(stock.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
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
