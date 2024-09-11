const convertToCelsius = function(fahrenheitTemperature) {
  return Math.round(((fahrenheitTemperature-32)/1.8)*10)/10
};

const convertToFahrenheit = function(celsiusTemperature) {
  return Math.round(((celsiusTemperature*1.8)+32)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
