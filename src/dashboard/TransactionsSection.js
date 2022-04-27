import TransactionList from "../components/TransactionList";

function TransactionsSection({ isSidebarOpen, dbTnxs }) {
  return (
    <div
      className={`transition-all duration-500 ${
        isSidebarOpen ? "ml-64" : "ml-0"
      }`}
    >
      <TransactionList dbTnxs={dbTnxs} />
    </div>
  );
}

export default TransactionsSection;
