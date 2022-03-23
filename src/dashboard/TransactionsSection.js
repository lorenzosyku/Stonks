import TransactionList from "../components/TransactionList";

function TransactionsSection({ transactions }) {
  return (
    <div className="ml-64">
      <TransactionList transactions={transactions} />
      
    </div>
  );
}

export default TransactionsSection;
