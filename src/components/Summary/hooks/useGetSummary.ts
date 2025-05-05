import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

// Types
import { RootState } from "../../../store";
import { Summary } from "../../../types/Summary";

// Services
import { getSummary } from "../../../services/auth";

function useGetSummary() {
  const { user } = useSelector((state: RootState) => state?.app);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["summary"],
    queryFn: fetchSummary,
    enabled: !!user?.accountNumber,
  });

  async function fetchSummary() {
    try {
      const response = await getSummary(user?.accountNumber ?? "");
      const data: Summary = response.data;

      return data;
    } catch (error) {
      console.error(error);
      return {
        balance: 0,
        deposits: 0,
        withdraws: 0,
      };
    }
  }

  return { summary: data, isLoading, isError };
}

export default useGetSummary;
