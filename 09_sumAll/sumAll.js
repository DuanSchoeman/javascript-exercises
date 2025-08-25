const sumAll = function(arg1,arg2) {
    let result = 0;
    if (arg1 === arg2 || arg1 < 0 || arg2 < 0 || 
        !Number.isInteger(arg1) || !Number.isInteger(arg2)) {
        return "ERROR";
    }

    let smallArg = Math.min(arg1,arg2);
    let bigArg = Math.max(arg1,arg2);
    
    for (i=smallArg;i<=bigArg;i++) {
        result = result + i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
