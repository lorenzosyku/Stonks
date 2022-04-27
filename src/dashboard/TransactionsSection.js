import TransactionList from "../components/TransactionList";

function TransactionsSection({ transactions,
  isSidebarOpen, setTransactions, dbTnxs }) {
  return (
    <div className={`transition-all duration-500 ${
      isSidebarOpen ? "ml-64" : "ml-0"
    }`}>
      <TransactionList dbTnxs={dbTnxs} transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
}

export default TransactionsSection;
