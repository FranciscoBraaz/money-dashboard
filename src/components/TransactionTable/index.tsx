// Styles
import { Undo } from "lucide-react";
import { Transaction } from "../../types/Transaction";
import useGetTransactions from "./hooks/useGetTransactions";
import "./index.scss";

function TransactionTable() {
  const { transactions, isLoading, isError } = useGetTransactions();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

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
          {transactions?.map((transaction: Transaction) => {
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
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
                <td>
                  <button className="transaction-table__undo">
                    <Undo />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default TransactionTable;
