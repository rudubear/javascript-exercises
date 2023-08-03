const convertToCelsius = function(fahrenheit) {
  let value = Number((fahrenheit - 32 ) * 5 / 9 ).toFixed(1);

  if (value == 0) return 0;
  if (value % 1 == 0) {
    return Number((Number(value).toFixed(0)));
  }
  else {
    return Number(value);
  }
};

const convertToFahrenheit = function(celsius) {
  let value = Number(celsius * 9 / 5 + 32).toFixed(1);

  if (value == 0) return 0;
  if (value % 1 == 0) {
    return Number((Number(value).toFixed(0)));
  }
  else {
    return Number(value);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
