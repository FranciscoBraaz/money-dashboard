import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

// Services
import { reverseDeposit } from "../../../services/deposit";

function useUndoDeposit() {
  const [isDepositConfirmModalOpen, setIsDepositConfirmModalOpen] =
    useState(false);
  const queryClient = useQueryClient();

  const undoDeposit = useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      await reverseDeposit(id);
    },
    onSuccess: () => {
      toast.success("O depósito foi desfeito");
      queryClient.invalidateQueries({ queryKey: ["transaction-history"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      setIsDepositConfirmModalOpen(false);
    },
    onError: () => {
      toast.error("Houve um erro ao desfazer depósito");
    },
  });

  return {
    isDepositConfirmModalOpen,
    setIsDepositConfirmModalOpen,
    undoDeposit,
  };
}

export default useUndoDeposit;
