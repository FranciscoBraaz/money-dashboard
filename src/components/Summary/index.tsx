import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { returnSummaryValue } from "../../utils";
import useGetSummary from "./hooks/useGetSummary";

// Styles
import "./index.scss";

function Summary() {
  const { summary, isLoading, isError } = useGetSummary();

  console.log(summary);

  return (
    <section className="summary">
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {returnSummaryValue(isLoading, isError, summary?.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {returnSummaryValue(isLoading, isError, summary?.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {returnSummaryValue(isLoading, isError, summary?.balance)}
        </strong>
      </div>
    </section>
  );
}

export default Summary;
