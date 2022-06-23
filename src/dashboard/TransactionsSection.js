import TransactionList from "../components/TransactionList";

function TransactionsSection({ dbTnxs }) {
  return (
    <div>
      <TransactionList dbTnxs={dbTnxs} />
    </div>
  );
}

export default TransactionsSection;
