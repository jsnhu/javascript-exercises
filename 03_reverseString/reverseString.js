const reverseString = function(string) {
    const stringCharacterArray = string.split('');
    let returnString = '';

    for (i=stringCharacterArray.length-1;i>-1;i--) {
        returnString += stringCharacterArray[i];
    }

    return returnString;

};

// Do not edit below this line
module.exports = reverseString;
