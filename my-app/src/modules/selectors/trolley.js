export const getTrolleyTotalPrice = state => {
  return (
    '£' +
    state.trolley.reduce(function(acc, obj) {
      return acc + parseInt(obj.price.substr(1), 10);
    }, 0)
  );
};
