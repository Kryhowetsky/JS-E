function getUserInput() {
    var input = parseInt(prompt("Write a number"));
    return input;
}

function getAsArray(number) {
    var array = (number)
        .toString()
        .split("")
        .map(function(t) {
            return parseInt(t);
        });

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
