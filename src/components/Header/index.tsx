import logoImg from "../../assets/logo.svg";

// Styles
import "./index.scss";

function Header() {
  return (
    <header className="header">
      <div>
        <img src={logoImg} alt="Money-dashboard" />
        <button type="button" onClick={() => console.log("Novo")}>
          Nova transação
        </button>
      </div>
    </header>
  );
}

export default Header;
