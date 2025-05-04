import { api } from "./api";

// Types
import { Transaction } from "../types/Transaction";

// Utils
import { formatDate } from "../utils";

const typesMap: Record<string, string> = {
  transfer_sended: "Transferência enviada",
  transfer_received: "Transferência recebida",
  transfer_reversed: "Transferência revertida",
  deposit_reversed: "Depósito revertido",
  deposit: "Depósito",
};

export async function getTransactions() {
  const { data } = await api.get(`/transaction-history`);

  const formattedData = data.map((transaction: Transaction) => ({
    ...transaction,
    title: typesMap[transaction.type],
    createdAt: formatDate(transaction.createdAt),
  }));

  return formattedData;
}
