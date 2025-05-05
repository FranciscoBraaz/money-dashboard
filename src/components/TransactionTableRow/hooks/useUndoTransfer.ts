import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

// Services
import { reverseTransfer } from "../../../services/transfer";

function useUndoTransfer() {
  const [isTransferConfirmModalOpen, setIsTransferConfirmModalOpen] =
    useState(false);
  const queryClient = useQueryClient();

  const undoTransfer = useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      await reverseTransfer(id);
    },
    onSuccess: () => {
      toast.success("A transferência foi desfeita");
      queryClient.invalidateQueries({ queryKey: ["transaction-history"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      setIsTransferConfirmModalOpen(false);
    },
    onError: () => {
      toast.error("Houve um erro ao desfazer transferência");
    },
  });

  return {
    isTransferConfirmModalOpen,
    setIsTransferConfirmModalOpen,
    undoTransfer,
  };
}

export default useUndoTransfer;
