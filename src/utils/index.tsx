function formatDate(dateValue: string) {
  const date = new Date(dateValue);
  const formatted = new Intl.DateTimeFormat("pt-BR").format(date);
  return formatted;
}

function onlyNumbers(value: string) {
  return value.replace(/\D/g, "");
}

export { formatDate, onlyNumbers };
