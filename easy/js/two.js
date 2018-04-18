function promptNumbers() {
    var inputNumbers = [];
    for (var i = 0; i < 5; i++) {
        var input = parseInt(prompt("Write a number"));
        if (Number.isInteger(input)) inputNumbers.push(input);
    }

    return inputNumbers;
}

function getMin(allNumbers) {
    var min = Math.min(...allNumbers);
    return min;
}

function getMax(allNumbers) {
    var max = Math.max(...allNumbers);
    return max;
}

function print(min, max) {
    var minElement = document.getElementById("min");
    minElement.textContent = min;

    var maxElement = document.getElementById("max");
    maxElement.textContent = max;
}

var allNumbers = promptNumbers();
var min = getMin(allNumbers);
var max = getMax(allNumbers);
print(min, max);
