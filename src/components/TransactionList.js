import moment from "moment";
import { useState } from "react";

function TransactionList({ transactions, setTransactions }) {
  const listBoughtStocks = [...transactions.stocksBought];
  const listSoldStocks = [...transactions.stocksSold];

  const [isOpenBought, setIsOpenBought] = useState(true);
  const [isOpenSold, setIsOpenSold] = useState(false);

  function deleteBoughtTnx(id) {
    const updatedBuyTransactions = [...listBoughtStocks].filter(
      (tnx) => tnx.id !== id
    );
    transactions.stocksBought = updatedBuyTransactions;
    setTransactions(transactions);
  }

  function deleteSoldTnx(id) {
    const updatedSellTransactions = [...listSoldStocks].filter(
      (tnx) => tnx.id !== id
    );
    transactions.stocksSold = updatedSellTransactions;
    setTransactions(transactions);
  }

  return (
    <div className="flex flex-col p-5 space-y-5">
      <div className="flex justify-between items-center">
        {!isOpenSold ? (
          <button
            className="py-3 px-6 text-xs font-medium tracking-wider bg-gray-700 rounded-md text-left text-gray-700 uppercase dark:text-gray-400"
            onClick={() => {
              setIsOpenBought(!isOpenBought);
              setIsOpenSold(!isOpenSold);
            }}
          >
            Bought
          </button>
        ) : (
          <button
            className="py-3 px-6 text-xs font-medium tracking-wider bg-gray-700 rounded-md text-left text-gray-700 uppercase dark:text-gray-400"
            onClick={() => {
              setIsOpenBought(!isOpenBought);
              setIsOpenSold(!isOpenSold);
            }}
          >
            Sold
          </button>
        )}
        <div className="">
          <button className="py-3 px-6 text-xs font-medium tracking-wider bg-gray-700 rounded-md text-left text-gray-700 uppercase dark:text-gray-400">
            Clear All
          </button>
        </div>
      </div>

      {isOpenBought ? (
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr className="">
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Stock Ticker
                      </th>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Shares Bought
                      </th>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Timestamp
                      </th>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Price
                      </th>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Amount Spent
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {listBoughtStocks.map((rowData) => (
                      <tr
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        key={rowData.id}
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex space-x-3 items-center">
                            <div
                              onClick={deleteBoughtTnx}
                              className="bg-slate-800 p-2 rounded-md cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                            <div>{rowData.stockName}</div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {rowData.shares}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {moment(rowData.id).format("MMMM Do YYYY, h:mm:ss a")}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          ${rowData.priceStock}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          ${rowData.amountSpent}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {isOpenSold ? (
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr className="">
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Stock Ticker
                      </th>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Shares Sold
                      </th>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Timestamp
                      </th>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Price
                      </th>
                      <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Amount Gained
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {listSoldStocks.map((rowData) => (
                      <tr
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        key={rowData.id}
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex space-x-3 items-center">
                            <div
                              onClick={deleteSoldTnx}
                              className="bg-slate-800 p-2 rounded-md cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                            <div>{rowData.stockName}</div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {rowData.shares}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {moment(rowData.id).format("MMMM Do YYYY, h:mm:ss a")}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          ${rowData.priceStock}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          ${rowData.amountGained}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TransactionList;
