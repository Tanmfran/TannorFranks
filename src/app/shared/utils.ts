export const currencyFormat = (num: number): string => {
  if (!num) return "";
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
