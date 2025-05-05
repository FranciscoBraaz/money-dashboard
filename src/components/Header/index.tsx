import logoImg from "../../assets/logo.svg";
import DepositModal from "../DepositModal";
import useDeposit from "./hooks/useDeposit";

// Styles
import "./index.scss";

function Header() {
  const { setIsDepositOpen, isDepositOpen, makeDeposit } = useDeposit();

  return (
    <header className="header">
      <div>
        <img src={logoImg} alt="Money-dashboard" />
        <section>
          <button type="button" onClick={() => setIsDepositOpen(true)}>
            Depositar
          </button>
          <button type="button" onClick={() => console.log("Novo")}>
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
    </header>
  );
}

export default Header;
