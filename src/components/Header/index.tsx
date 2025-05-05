import { useSelector } from "react-redux";

// Assets
import logoImg from "../../assets/logo.svg";

// Store
import { RootState } from "../../store";

// Custom hooks
import useDeposit from "./hooks/useDeposit";
import useTransfer from "./hooks/useTransfer";
import useLogout from "./hooks/useLogout";

// Components
import DepositModal from "../DepositModal";
import TransferModal from "../TransferModal";

// Styles
import "./index.scss";

function Header() {
  const { setIsDepositOpen, isDepositOpen, makeDeposit } = useDeposit();
  const { setIsTransferOpen, isTransferOpen, makeTransfer } = useTransfer();
  const { logout } = useLogout();

  const { user } = useSelector((state: RootState) => state?.app);

  return (
    <header className="header">
      <div>
        <img src={logoImg} alt="Money-dashboard" />
        <section>
          <div>
            <button type="button" onClick={() => setIsDepositOpen(true)}>
              Depositar
            </button>
            <button type="button" onClick={() => setIsTransferOpen(true)}>
              Transferir
            </button>
          </div>
          <div className="header__user">
            <p>Olá, {user?.name}</p>
            <button className="header__avatar" type="button" onClick={logout}>
              Sair
            </button>
          </div>
          <p className="header__account">
            <strong>Nº da conta:</strong>
            <span>{user?.accountNumber}</span>
          </p>
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
