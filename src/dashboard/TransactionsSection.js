import TransactionList from "../components/TransactionList";

function TransactionsSection({ transactions,
  isSidebarOpen }) {
  return (
    <div className={`transition-all duration-500 ${
      isSidebarOpen ? "ml-64" : "ml-0"
    }`}>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default TransactionsSection;
