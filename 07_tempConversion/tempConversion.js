const convertToCelsius = function(far) {
  return parseFloat(((far - 32) * 5/9).toFixed(1))
  
};

const convertToFahrenheit = function(cel) {
  return parseFloat(((9/5 * cel) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
