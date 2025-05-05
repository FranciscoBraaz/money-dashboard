import { HashLoader } from "react-spinners";

// Types
import { Transaction } from "../../types/Transaction";

// Custom hooks
import useGetTransactions from "./hooks/useGetTransactions";

// Components
import TransactionTableRow from "../TransactionTableRow";

// Styles
import "./index.scss";

function TransactionTable() {
  const { transactions, isLoading, isError } = useGetTransactions();

  if (isLoading) {
    return (
      <div className="loading-table">
        <HashLoader color="#5429cc" />
        <p>Carregando transações</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-table">
        <p>Erro ao carregar transações</p>
      </div>
    );
  }

  return (
    <section className="transaction-table">
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.length === 0 && <p>Nenhuma transação encontrada</p>}
          {transactions?.map((transaction: Transaction) => (
            <TransactionTableRow
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TransactionTable;
