import moment from "moment";

function TransactionList({ transactions }) {
  const listBoughtStocks = [...transactions.stocksBought];
  const listSoldStocks = [...transactions.stocksSold];

  return (
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
                    Shares
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
                      {rowData.stockName}
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

      {/*<div className="">
        <table>
          <thead className="flex">
            <tr className="grid grid-cols-5">
              <th>Stock Ticker</th>
              <th>Shares</th>
              <th>Timestamp</th>
              <th>Price</th>
              <th>Amount Gained</th>
            </tr>
          </thead>
          <tbody>
            {listSoldStocks.map((rowData) => (
              <tr className="grid grid-cols-5" key={rowData.id}>
                <td>{rowData.stockName}</td>
                <td>{rowData.shares}</td>
                <td>{moment(rowData.id).format("MMMM Do YYYY, h:mm:ss a")}</td>
                <td>${rowData.priceStock}</td>
                <td>${rowData.amountGained}</td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>*/}
    </div>
  );
}

export default TransactionList;
