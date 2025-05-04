import { api } from "./api";

export async function createDeposit({
  accountNumber,
  value,
}: {
  accountNumber: string;
  value: number;
}) {
  await api.post("/deposit", { accountNumber, value });
}
