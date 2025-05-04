function formatDate(dateValue: string) {
  const date = new Date(dateValue);
  const formatted = new Intl.DateTimeFormat("pt-BR").format(date);
  return formatted;
}

export { formatDate };
