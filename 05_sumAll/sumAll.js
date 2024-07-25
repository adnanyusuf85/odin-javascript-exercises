const sumAll = function() {
    if (!validateNumber(arguments[0]) || !validateNumber(arguments[1]))
        return "ERROR";


    let smallNumber = Math.min(arguments[0],arguments[1]);
    let largeNumber = Math.max(arguments[0],arguments[1]);
    let sum = 0;
    for (let i = smallNumber; i<= largeNumber; i++)
    {
        sum += i;
    }
    return sum;
};



function validateNumber(num)
{
    return validateIsANumber(num) && validateIsAnInteger(num) && validateIsPositive(num);
}

function validateIsANumber(num)
{
    return !isNaN(num);
}

function validateIsAnInteger(num)
{
    return Number.isInteger(num);
}

function validateIsPositive(num)
{
    return num >= 0;
}

// Do not edit below this line
module.exports = sumAll;
