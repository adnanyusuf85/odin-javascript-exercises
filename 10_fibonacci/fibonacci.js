const fibonacci = function myFun(position) {
    if (position < 0)
    {
        return ("OOPS");
    }
    if (position == 0)
    {
        return 0;
    }
    if (position == 1 | position == 2)
    {
        return 1;
    }
    else
    {
        return myFun(position-1) + myFun(position-2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
