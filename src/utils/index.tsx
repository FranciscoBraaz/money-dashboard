function formatDate(dateValue: string) {
  const date = new Date(dateValue);
  const formatted = new Intl.DateTimeFormat("pt-BR").format(date);
  return formatted;
}

function onlyNumbers(value: string) {
  return value.replace(/\D/g, "");
}

function returnSummaryValue(
  isLoading: boolean,
  isError: boolean,
  value: number | undefined
) {
  if (isLoading) {
    return "Carregando...";
  }

  if (isError) {
    return "Erro ao carregar";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value ?? 0);
}

export { formatDate, onlyNumbers, returnSummaryValue };
