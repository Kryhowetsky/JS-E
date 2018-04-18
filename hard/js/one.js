function getInput() {
    var input = prompt("Write a number");
    var number = parseInt(input);
    return number;
}

function print(number) {
    if (number < 1) return;

    printOnPage(number);
    number--;

    print(number);
}

function printOnPage(number) {
    var output = document.getElementById("output");
    output.innerHTML += number + "<br>";
}

var input = getInput();
print(input);
