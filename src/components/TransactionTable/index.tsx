// Styles
import "./index.scss";

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    title: "Desenvolvimento de site",
    type: "deposit",
    amount: 6000,
    category: "Dev",
    createdAt: new Date().toDateString(),
  },
  {
    id: 2,
    title: "Aluguel",
    type: "withdraw",
    amount: 1100,
    category: "Casa",
    createdAt: new Date().toDateString(),
  },
  {
    id: 3,
    title: "Desenvolvimento de site",
    type: "deposit",
    amount: 6000,
    category: "Dev",
    createdAt: new Date().toDateString(),
  },
  {
    id: 4,
    title: "Aluguel",
    type: "withdraw",
    amount: 1100,
    category: "Casa",
    createdAt: new Date().toDateString(),
  },
  {
    id: 5,
    title: "Desenvolvimento de site",
    type: "deposit",
    amount: 6000,
    category: "Dev",
    createdAt: new Date().toDateString(),
  },
  {
    id: 6,
    title: "Aluguel",
    type: "withdraw",
    amount: 1100,
    category: "Casa",
    createdAt: new Date().toDateString(),
  },
  {
    id: 7,
    title: "Desenvolvimento de site",
    type: "deposit",
    amount: 6000,
    category: "Dev",
    createdAt: new Date().toDateString(),
  },
  {
    id: 8,
    title: "Aluguel",
    type: "withdraw",
    amount: 1100,
    category: "Casa",
    createdAt: new Date().toDateString(),
  },
  {
    id: 9,
    title: "Desenvolvimento de site",
    type: "deposit",
    amount: 6000,
    category: "Dev",
    createdAt: new Date().toDateString(),
  },
  {
    id: 10,
    title: "Aluguel",
    type: "withdraw",
    amount: 1100,
    category: "Casa",
    createdAt: new Date().toDateString(),
  },
];

function TransactionTable() {
  return (
    <section className="transaction-table">
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === "withdraw" && "-"}{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
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
