const convertToCelsius = function(temp) {
  let degree = (temp - 32) * 5/9;
  let celcius = Math.round(degree * 10) / 10;
  return celcius;
};

const convertToFahrenheit = function(temp) {
  let degree = (temp * 9/5) + 32;
  let faren = Math.round(degree * 10) / 10;
  return faren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
