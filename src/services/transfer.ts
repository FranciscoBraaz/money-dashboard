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
