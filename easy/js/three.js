function promptNumbers() {
    var inputNumbers = [];
    for (var i = 0; i < 5; i++) {
        var input = parseInt(prompt("Write a number"));
        if (Number.isInteger(input)) inputNumbers.push(input);
    }

    return inputNumbers;
}

function print(average) {
    var averageElement = document.getElementById("average");
    averageElement.textContent = average;
}

function getAverage(allNumbers) {
    var sum = 0;
    allNumbers.forEach(element => {
        sum += element;
    });

    var average = sum / allNumbers.length;

    return average;
}

var allNumbers = promptNumbers();
var average = getAverage(allNumbers);
print(average);
