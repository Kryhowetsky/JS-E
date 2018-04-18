function getUserInput() {
    var input = prompt("Write a phrase");
    return input;
}

function getAsArray(number) {
    var array = number.split("");
    return array;
}

function print(output) {
    var outputElement = document.getElementById("reversed");
    outputElement.textContent = output;
}

var input = getUserInput();
var inputAsArray = getAsArray(input);
var reversed = inputAsArray.reverse();
print(reversed.join(""));
