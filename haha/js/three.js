var fahrenheitToCelsiusButton = document.getElementById(
    "fahrenheit-to-celsius"
);
var celsiusToFahrenheitButton = document.getElementById(
    "celsius-to-fahrenheit"
);

var celsiusInput = document.getElementById("celsius");
var fahrenheitInput = document.getElementById("fahrenheit");

var fahrenheitConsts = {
    multiplication: 9 / 5,
    division: 5 / 9,
    addition: 32
};

fahrenheitToCelsiusButton.addEventListener("click", function() {
    var fahrenheit = getFahrenheit();
    var celsius = convertFahrenheitToCelsius(fahrenheit);
    celsiusInput.value = celsius;
});

celsiusToFahrenheitButton.addEventListener("click", function() {
    var celsius = getCelsius();
    var fahrenheit = convertCelsiusToFahrenheit(celsius);
    fahrenheitInput.value = fahrenheit;
});

function getFahrenheit() {
    var fahrenheitElement = document.getElementById("fahrenheit");
    return fahrenheitElement.valueAsNumber;
}

function getCelsius() {
    var celsiusElement = document.getElementById("celsius");
    return celsiusElement.valueAsNumber;
}

function convertCelsiusToFahrenheit(celsius) {
    var fahrenheit =
        celsius * fahrenheitConsts.multiplication + fahrenheitConsts.addition;
    return fahrenheit;
}

function convertFahrenheitToCelsius(fahrenheit) {
    var celsius =
        (fahrenheit - fahrenheitConsts.addition) * fahrenheitConsts.division;
    return celsius;
}

function degreeConvert() {
    const fahrenheit = 1.8;
    var c = parseInt(prompt("Input the temperature in degrees Celsius"));
    c = c * fahrenheit + 32;
    return c;
}
