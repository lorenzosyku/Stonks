import TransactionList from "../components/TransactionList";

function TransactionsSection({ transactions,
  isSidebarOpen, setTransactions }) {
  return (
    <div className={`transition-all duration-500 ${
      isSidebarOpen ? "ml-64" : "ml-0"
    }`}>
      <TransactionList transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
}

export default TransactionsSection;
