var input = [1, 2, 3, 1, 3, 1];

var duplicates = input.reduce(function(
    accumulator,
    currentValue,
    currentIndex,
    array
    ) {
        if (
            array.indexOf(currentValue) !== currentIndex &&
            accumulator.indexOf(currentValue) < 0
        )
            accumulator.push(currentValue);
        return accumulator;
    },
    []);


document.write(duplicates);