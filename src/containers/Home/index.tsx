import Summary from "../../components/Summary";
import TransactionTable from "../../components/TransactionTable";

// Styles
import "./index.scss";

function Home() {
  return (
    <main className="home">
      <Summary />
      <TransactionTable />
    </main>
  );
}

export default Home;
