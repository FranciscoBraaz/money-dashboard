import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createDeposit } from "../../../services/deposit";

function useDeposit() {
  const [isDepositOpen, setIsDepositOpen] = useState(false);

  const makeDeposit = useMutation({
    mutationFn: async ({
      accountNumber,
      value,
    }: {
      accountNumber: string;
      value: number;
    }) => {
      await createDeposit({ accountNumber, value });
    },
    onSuccess: () => {
      setIsDepositOpen(false);
    },
    onError: () => {
      setIsDepositOpen(false);
    },
  });

  return { isDepositOpen, setIsDepositOpen, makeDeposit };
}

export default useDeposit;
