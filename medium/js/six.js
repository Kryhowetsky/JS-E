function getUserInput() {
    var input = parseInt(prompt("Write a number"));
    return input;
}

function getFactorial(number) {
    if (number < 1) return;

    var factorial = number;
    for (var i = number - 1; i > 1; i--) factorial *= i;

    return factorial;
}

function print(printedResult) {
    var outputElement = document.getElementById("factorial");
    outputElement.textContent = printedResult;
}

var userInputNumber = getUserInput();
var result = getFactorial(userInputNumber);
print(result);
