function camelize(str) {
    return str
    .split("-")
    .map(splitStr => splitStr.charAt(0).toUpperCase()+splitStr.slice(1))
    .join("");
}

/*console.log(camelize("Duan-is-a-legend"));*/

function filterRange(arr,a,b) {
    let filteredArr = arr
    return filteredArr
    .filter(arr => arr >= a && arr <= b);
}

/*console.log(filterRange([5, 3, 8, 1],1,4));*/

function filterRangeInPlace(arr,a,b) {
    return arr.filter(arr => arr >= a && arr <= b);
}

/*console.log(filterRangeInPlace([5, 3, 8, 1],1,4));*/


/*let arr = [5, 2, 1, -10, 8];

console.log(arr.sort((a,b) => b-a));*/

