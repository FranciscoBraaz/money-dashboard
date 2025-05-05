import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

// Services
import { createTransfer } from "../../../services/transfer";

// Types
import { RootState } from "../../../store";

function useTransfer() {
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state?.app);
  const queryClient = useQueryClient();

  const makeTransfer = useMutation({
    mutationFn: async ({
      value,
      accountNumber,
    }: {
      value: number;
      accountNumber: string;
    }) => {
      if (!user) return;

      await createTransfer({
        value,
        sourceAccountNumber: user.accountNumber,
        destinationAccountNumber: accountNumber,
      });
    },
    onSuccess: () => {
      toast.success("A transferência foi realizada");
      queryClient.invalidateQueries({ queryKey: ["transaction-history"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      setIsTransferOpen(false);
    },
    onError: () => {
      toast.error("Houve um erro ao transferir o valor");
    },
  });

  return { isTransferOpen, setIsTransferOpen, makeTransfer };
}

export default useTransfer;
