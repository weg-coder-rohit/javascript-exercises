const convertToCelsius = function(far) {
  return ((far - 32) * 5/9)
  
};

const convertToFahrenheit = function(cel) {
  return ((9/5 * cel) + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
