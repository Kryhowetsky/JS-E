var inputNumbers = [];

function promptNumbers() {
    for (var i = 0; i < 5; i++) {
        var input = parseInt(prompt("Write a number"));
        if (Number.isInteger(input)) inputNumbers.push(input);
    }
}

function getOnlyOdd(allNumbers) {
    var oddNumbers = [];

    for (var i = 0; i < allNumbers.length; i++)
        if (!isOdd(allNumbers[i])) oddNumbers.push(allNumbers[i]);

    return oddNumbers;
}

function print(array) {
    var outputElement = document.getElementById("output");
    for (var i = 0; i < array.length; i++) outputElement.innerHTML += array[i] + '<br>';
}

function isOdd(number) {
    return number % 2;
}

promptNumbers();
var odd = getOnlyOdd(inputNumbers);
print(odd);
