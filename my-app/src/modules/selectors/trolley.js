export const getTrolleyTotalPrice = state => {
  let sum = 0;
  let total = 0;
  state.trolley.forEach(item => {
    total = sum += parseInt(item.price.substr(1), 10);
  });
  return '£' + total;
};
