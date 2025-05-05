import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../../services/transaction";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function useGetTransactions() {
  const { user } = useSelector((state: RootState) => state?.app);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["transaction-history"],
    queryFn: fetchTransactions,
    enabled: !!user?.accountNumber,
  });

  async function fetchTransactions() {
    try {
      const data = await getTransactions(user?.accountNumber ?? "");

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  return { transactions: data, isLoading, isError };
}

export default useGetTransactions;
