const palindromes = function (sentence) {
    let characters = sentence.toLowerCase().split("");
    let alphaCharactersOnly = characters.filter(x=> {return x.match(/[a-z0-9]/);});
    
    let length = alphaCharactersOnly.length;

    for (let i=0;i<length;i++)
    {
        console.log(`${alphaCharactersOnly[i]} and ${alphaCharactersOnly[length-i-1]}`);
        if (alphaCharactersOnly[i] != alphaCharactersOnly[length-i-1])
        {
            return false;
        }
    }
    return true;
    
};


// Do not edit below this line
module.exports = palindromes;
