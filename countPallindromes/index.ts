function countPalindromesInString(str) {
    let count = str.length;
    let subString;

    for (let i = 1; i < str.length; i++) {
      for(let j = 0; j < str.length - i; j++) {
        subString = str.substring(j, j+i+1);
        if(subString === subString.split('').reverse().join('')) {
            count += 1;
        }
      }
    }
    return count;
}

console.log(countPalindromesInString('aaa'))