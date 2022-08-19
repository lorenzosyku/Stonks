import moment from "moment";
import { useState } from "react";

function TransactionList({ dbTnxs }) {
  const listBoughtStocks = dbTnxs.stocksBought;
  const listSoldStocks = dbTnxs.stocksSold;

  const [isOpenBought, setIsOpenBought] = useState(true);
  const [isOpenSold, setIsOpenSold] = useState(false);

  return (
    <div className="flex flex-col p-5 space-y-5">
      <div className="flex justify-center items-center">
        {!isOpenSold ? (
          <button
            className="py-3 px-6 text-xs font-medium tracking-wider bg-gray-700 rounded-md text-left text-gray-200 uppercase dark:text-gray-400 hover:bg-gray-600 hover:scale-105 transition transform duration-200 ease-out"
            onClick={() => {
              setIsOpenBought(!isOpenBought);
              setIsOpenSold(!isOpenSold);
            }}
          >
            Bought
          </button>
        ) : (
          <button
            className="py-3 px-6 text-xs font-medium tracking-wider bg-gray-700 rounded-md text-left text-gray-200 uppercase dark:text-gray-400 hover:bg-gray-600 hover:scale-105 transition transform duration-200 ease-out"
            onClick={() => {
              setIsOpenBought(!isOpenBought);
              setIsOpenSold(!isOpenSold);
            }}
          >
            Sold
          </button>
        )}
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
                    {listBoughtStocks?.map((rowData) => (
                      <tr
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        key={rowData.id}
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex space-x-3 items-center">
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
                    {listSoldStocks?.map((rowData) => (
                      <tr
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        key={rowData.id}
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex space-x-3 items-center">
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
