import TransactionList from "../components/TransactionList";
import { Button, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";

function TransactionsSection({ transactions }) {
  const modals = useModals();

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: "Please confirm your action",
      children: (
        <Text size="sm">
          Currently this account does not hold enough funds to process the transaction.
        </Text>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  const opendenyModal = () =>
    modals.openConfirmModal({
      title: "Please confirm your action",
      children: (
        <Text size="sm">
          Currently this account does not hold enough shares to process the transaction
        </Text>
      ),
      labels: { confirm: "OK", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  return (
    <div className="ml-64">
      <TransactionList transactions={transactions} />

      <Button onClick={openConfirmModal}>Open confirm modal</Button>
      <Button onClick={opendenyModal}>Open deny modal</Button>
    </div>
  );
}

export default TransactionsSection;
