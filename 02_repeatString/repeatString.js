const repeatString = function(inputText,numOfIterations) {
    let workingString = "";
    if (numOfIterations < 0)
    {
        return "ERROR";
    }
    for (let i=0; i<numOfIterations;i++)
    {
        workingString += inputText;
    }
    return workingString;
};

// Do not edit below this line
module.exports = repeatString;
