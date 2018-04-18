var completeButton = document.getElementById("completeButton");

completeButton.addEventListener("click", function() {
    var a = getA();
    var b = getB();
    var c = getC(a, b);

    setOutput(c);
});

function getA() {
    var aElement = document.getElementById("a");
    return parseInt(aElement.value);
}

function getB() {
    var bElement = document.getElementById("b");
    return parseInt(bElement.value);
}

function getC(a, b) {
    var c = pythagor(a, b);
    return c.toFixed(2);
}

function setOutput(result) {
    var output = document.getElementById("output");
    output.textContent = "The hypotenuse is " + result;
}

function pythagor(a, b) {
    return Math.sqrt(a * a + b * b);
}



