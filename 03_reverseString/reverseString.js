const reverseString = function(inputString) {
    const lengthOfInputString = inputString.length;
    let reversedString = "";
    for (let i=lengthOfInputString;i>0;i--)
    {
        reversedString += inputString[i-1];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
