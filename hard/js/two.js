function getUserInput(requiredFields) {
    var inputObject = {};

    for (var i = 0; i < requiredFields.length; i++) {
        var input = prompt("input your " + requiredFields[i]);

        if (input === "") continue;

        inputObject[requiredFields[i]] = input;
    }

    return inputObject;
}

function validate(requiredFields, object) {
    for (var i = 0; i < requiredFields.length; i++) {
        var isExist = requiredFields[i] in object;

        if (!isExist) {
            var exceptionMessage = "Some fields do not exist"
            printException(exceptionMessage);
            throw exceptionMessage;
        }
    }

    return true;
}

function printException(message) {
    var outputElement = document.getElementById("output");
    outputElement.textContent = message;
}

function print(resultObject) {
    var outputElement = document.getElementById("output");

    var output = '';
    for (var property in resultObject) {
        output += property + ': ' + resultObject[property]+'; ';
    }

    outputElement.textContent = output;
}

var requiredFields = ["name", "surname", "age"];
var input = getUserInput(requiredFields);
var isValid = validate(requiredFields, input);

if (isValid) print(input);
