export const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const toCurrency = (price: number | string) => {
  let target;
  typeof price === "number" ? (target = String(price)) : (target = price);
  return target.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
