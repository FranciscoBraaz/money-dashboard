import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

// Services
import { createDeposit } from "../../../services/deposit";

// Types
import { RootState } from "../../../store";
import { toast } from "react-toastify";

function useDeposit() {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state?.app);
  const queryClient = useQueryClient();

  const makeDeposit = useMutation({
    mutationFn: async ({ value }: { value: number }) => {
      if (!user) return;

      await createDeposit({ value, accountNumber: user.accountNumber });
    },
    onSuccess: () => {
      toast.success("O valor foi depositado");
      queryClient.invalidateQueries({ queryKey: ["transaction-history"] });
      setIsDepositOpen(false);
    },
    onError: () => {
      toast.error("Houve um erro ao depositar o valor");
      setIsDepositOpen(false);
    },
  });

  return { isDepositOpen, setIsDepositOpen, makeDeposit };
}

export default useDeposit;
