const arr1 = [1,1,1,1,1,2];
const arr2 = [1,2,3,4,4,4,7,7,12,12,13];
const arr3 = [];
const arr4 = [-2,-1,-1,0,1];

function uniqueValues(arr) {
    let uniqueTotal = arr.length ? 1: 0;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] !== arr[i-1]){
            uniqueTotal += 1;
        }
    }
    return uniqueTotal;

}

console.log(uniqueValues(arr1));
console.log(uniqueValues(arr2));
console.log(uniqueValues(arr3));
console.log(uniqueValues(arr4));