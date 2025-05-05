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

export async function reverseDeposit(id: string) {
  await api.patch(`/deposit/reverse/${id}`);
}
