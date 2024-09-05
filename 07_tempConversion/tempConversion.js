const convertToCelsius = function(temperatur) {
  const temperaturCelsius = ((temperatur -32)*5/9);
  var roundedTemperaturCelsius = Math.round(temperaturCelsius*10)/10
  return roundedTemperaturCelsius;
};

const convertToFahrenheit = function(temperatur) {
  const temperaturFahrenheit = ((temperatur*9/5 +32));
  var roundedTemperaturFahrenheit = Math.round(temperaturFahrenheit*10)/10
  return roundedTemperaturFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
