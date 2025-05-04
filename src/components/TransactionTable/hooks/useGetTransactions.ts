import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../../services/transaction";

function useGetTransactions() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["transaction-history"],
    queryFn: fetchTransactions,
  });

  async function fetchTransactions() {
    try {
      const data = await getTransactions();

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  return { transactions: data, isLoading, isError };
}

export default useGetTransactions;
