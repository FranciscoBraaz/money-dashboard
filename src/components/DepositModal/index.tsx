import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { useState } from "react";

import "./index.scss";
import { onlyNumbers } from "../../utils";

interface DepositModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleDeposit: ({
    accountNumber,
    amount,
  }: {
    accountNumber: string;
    amount: number;
  }) => void;
}

function DepositModal({
  isOpen,
  onRequestClose,
  handleDeposit,
}: DepositModalProps) {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleDeposit({ accountNumber, amount: Number(amount) });
        }}
        className="deposit-modal"
      >
        <h2>Depositar dinheiro</h2>
        <input
          type="text"
          placeholder="Conta"
          value={accountNumber}
          onChange={(event) =>
            setAccountNumber(onlyNumbers(event.target.value))
          }
        />
        <input
          type="text"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(onlyNumbers(event.target.value))}
        />

        <button type="submit">Depositar</button>
      </form>
    </Modal>
  );
}

export default DepositModal;
