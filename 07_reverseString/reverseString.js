function reverseString(str) {
    let splitStr = str.split("");
    let output = "";
    for (let i = (str.length-1); i >= 0; i--) {
        output = output + splitStr[i];
    }
    return output
}

// Do not edit below this line
module.exports = reverseString;
