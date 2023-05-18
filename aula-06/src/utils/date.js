export default function formatDate(date) {
  // const formatDate = date.split("T")[0];

  // const dataCortada = formatDate.split("-");
  return new Date(date).toLocaleDateString("pt-BR");

  // return new Intl.DateTimeFormat("pt-BR").format(dateConverted);
}
