const palindromes = function (string) {

    var string = string.replace(/[\p{P}\p{S}]/gu, "")
    
    var string = string.replace(/ /g, "");

    var string = string.toLowerCase();

    var splitString = string.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    if (joinArray === string){
        return true;
    } else {
        console.log(joinArray)
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
