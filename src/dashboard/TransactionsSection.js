import TransactionList from "../components/TransactionList";

function TransactionsSection({ isSidebarOpen, dbTnxs }) {
  return (
    <div>
      <TransactionList dbTnxs={dbTnxs} />
    </div>
  );
}

export default TransactionsSection;
