import { Undo } from "lucide-react";

// Types
import { Transaction } from "../../types/Transaction";

// Custom hooks
import useUndoTransfer from "./hooks/useUndoTransfer";
import useUndoDeposit from "./hooks/useUndoDeposit";

// Components
import ConfirmModal from "../ConfirmModal";

// Styles
import "./index.scss";

interface TransactionTableRowProps {
  transaction: Transaction;
}

const disabledTypes = [
  "transfer_received",
  "transfer_reversed",
  "deposit_reversed",
];

function TransactionTableRow({ transaction }: TransactionTableRowProps) {
  const {
    isTransferConfirmModalOpen,
    setIsTransferConfirmModalOpen,
    undoTransfer,
  } = useUndoTransfer();
  const {
    isDepositConfirmModalOpen,
    setIsDepositConfirmModalOpen,
    undoDeposit,
  } = useUndoDeposit();

  const disableUndo =
    disabledTypes.includes(transaction.type) || transaction.alreadyReversed;

  return (
    <tr key={transaction.id}>
      <td>{transaction.title}</td>
      <td className={transaction.type}>
        {transaction.type === "transfer_sended" && "-"}{" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(transaction.value))}
      </td>
      <td>{transaction.createdAt}</td>
      <td>
        <button
          className="transaction-table__undo"
          onClick={() => {
            if (disableUndo) return;

            if (transaction.type === "deposit") {
              setIsDepositConfirmModalOpen(true);
            } else {
              setIsTransferConfirmModalOpen(true);
            }
          }}
          disabled={disableUndo}
        >
          <Undo />
        </button>
      </td>

      <ConfirmModal
        title="Desfazer transferência"
        description="Tem certeza que deseja desfazer essa transferência?"
        isOpen={isTransferConfirmModalOpen}
        isLoading={undoTransfer.isPending}
        onRequestClose={() => {
          setIsTransferConfirmModalOpen(false);
          setIsDepositConfirmModalOpen(false);
        }}
        handleConfirm={() =>
          undoTransfer.mutate({ id: transaction.referenceId })
        }
      />
      <ConfirmModal
        title="Desfazer depósito"
        description="Tem certeza que deseja desfazer esse depósito?"
        isOpen={isDepositConfirmModalOpen}
        isLoading={undoDeposit.isPending}
        onRequestClose={() => setIsDepositConfirmModalOpen(false)}
        handleConfirm={() =>
          undoDeposit.mutate({ id: transaction.referenceId })
        }
      />
    </tr>
  );
}

export default TransactionTableRow;
