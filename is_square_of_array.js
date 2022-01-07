function is_square_of_array (arr1, arr2) {
    if (arr1.length!== arr2.length){
        return false;
    }

    let map1 = {};
    let map2 = {};

    for (let val of arr1){
        map1[val]= (map1[val] || 0 ) + 1 
    }

    for (let val of arr2){
        map2[val] = (map2[val] || 0 ) + 1
    }

    for (let val in map1){
        if ( !(val ** 2 in map2) ){
            return false;
        }

        if( map2[val**2] !== map1[val]){
            return false;
        }
    }

    return true;
}

console.log(is_square_of_array([1,3, 2], [1,4, 9]));
console.log(is_square_of_array([6, 1,3, 2], [2,4, 9, 0]));
console.log(is_square_of_array([0,3, 2], [0,4, 9]));
console.log(is_square_of_array([5,10, 8], [25,64, 100]));