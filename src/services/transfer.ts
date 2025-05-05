import { api } from "./api";

export async function createTransfer({
  sourceAccountNumber,
  destinationAccountNumber,
  value,
}: {
  sourceAccountNumber: string;
  destinationAccountNumber: string;
  value: number;
}) {
  await api.post("/transfer", {
    sourceAccountNumber,
    destinationAccountNumber,
    value,
  });
}

export async function reverseTransfer(id: string) {
  await api.patch(`/transfer/reverse/${id}`);
}
