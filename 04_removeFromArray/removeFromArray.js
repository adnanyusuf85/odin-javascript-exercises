const removeFromArray = function() {
    let inputArray = arguments[0];
    let processedArray = [];
    totalNumbersToRemove = arguments.length-1;
    
    const numbersToRemove = Array.from(arguments).slice(1);
    console.log(numbersToRemove.toString());
    inputArray.forEach(element => {
        if (!numbersToRemove.includes(element))
        {
            processedArray.push(element);
        }
    });
    console.log(`output array ${processedArray.toString()}`);
    return processedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
