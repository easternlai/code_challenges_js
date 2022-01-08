function is_anagram1 (word1, word2){

    if(word1.split('').sort().join('').replace(' ', '') == word2.split('').sort().join('').replace(' ', '') ){
        return true;
    }else{
        return false;
    }
}

function is_anagram (word1, word2) {
    const map1 = {};
    const map2 = {};

    for ( i = 0; i < word1.length; i++){
        if (word1[i] !== ' '){
        map1[word1[i]] = (map1[word1[i]] || 0) + 1; 
        }
    }
    
    for ( i = 0; i < word2.length; i++) {
        if(word2[i] !== ' '){
        map2[word2[i]] = (map2[word2[i]]|| 0 ) + 1;
        }
    }
    
    for ( val in map1) {

       if(map1[val] !== map2[val]){
           return false;
       }
     }

     for ( val in map2) {

        if(map1[val] !== map2[val]){
            return false;
        }
      }
 

    return true;

}


console.log(is_anagram(',', ''))
console.log(is_anagram('aaz', 'zza'));
console.log(is_anagram('anagram', 'nagaram'));


