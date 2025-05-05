import logoImg from "../../assets/logo.svg";
import DepositModal from "../DepositModal";
import TransferModal from "../TransferModal";
import useDeposit from "./hooks/useDeposit";
import useTransfer from "./hooks/useTransfer";

// Styles
import "./index.scss";

function Header() {
  const { setIsDepositOpen, isDepositOpen, makeDeposit } = useDeposit();
  const { setIsTransferOpen, isTransferOpen, makeTransfer } = useTransfer();

  return (
    <header className="header">
      <div>
        <img src={logoImg} alt="Money-dashboard" />
        <section>
          <button type="button" onClick={() => setIsDepositOpen(true)}>
            Depositar
          </button>
          <button type="button" onClick={() => setIsTransferOpen(true)}>
            Transferir
          </button>
        </section>
      </div>
      <DepositModal
        isOpen={isDepositOpen}
        onRequestClose={() => setIsDepositOpen(false)}
        isLoading={makeDeposit.isPending}
        handleDeposit={({ amount }) => {
          makeDeposit.mutate({ value: Number(amount) });
        }}
      />
      <TransferModal
        isOpen={isTransferOpen}
        onRequestClose={() => setIsTransferOpen(false)}
        isLoading={makeTransfer.isPending}
        handleTransfer={({ amount, accountNumber }) => {
          makeTransfer.mutate({ value: Number(amount), accountNumber });
        }}
      />
    </header>
  );
}

export default Header;
