import moment from 'moment';

function TransactionList({ transactions }) {
  const listBoughtStocks = [...transactions.stocksBought];
  const listSoldStocks = [...transactions.stocksSold];

  return (
    <div>
      <div>
        <h1>Bought</h1>
        <table>
          <thead>
            <tr>
              <th>Stock Ticker</th>
              <th>Shares</th>
              <th>Timestamp</th>
              <th>Price</th>
              <th>Amount Spent</th>
            </tr>
          </thead>
          <tbody>
            {listBoughtStocks.map((rowData) => (
              <tr key={rowData.id}>
                <td>{rowData.stockName}</td>
                <td>{rowData.shares}</td>
                <td>{moment(rowData.id).format('MMMM Do YYYY, h:mm:ss a')}</td>
                <td>${rowData.priceStock}</td>
                <td>${rowData.amountSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1>Sold</h1>
        <table>
          <thead>
            <tr>
              <th>Stock Ticker</th>
              <th>Shares</th>
              <th>Timestamp</th>
              <th>Price</th>
              <th>Amount Gained</th>
            </tr>
          </thead>
          <tbody>
            {listSoldStocks.map((rowData) => (
              <tr key={rowData.id}>
                <td>{rowData.stockName}</td>
                <td>{rowData.shares}</td>
                <td>{moment(rowData.id).format('MMMM Do YYYY, h:mm:ss a')}</td>
                <td>${rowData.priceStock}</td>
                <td>${rowData.amountGained}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionList;
