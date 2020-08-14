const duplicateEncode = (word: string): string => {

    const frequencies: object = {};
    const res: string[] = [];
    const chArr: string[] = word.toLowerCase().split('');

    chArr.forEach(ch => {
        if(frequencies[ch]){
            frequencies[ch] += 1;
        }
        else{
            frequencies[ch] = 1;
        }
    });

    chArr.forEach(ch => {
        if(frequencies[ch] === 1){
            res.push('(');
        }
        else if(frequencies[ch] > 1){
            res.push(')');
        }
    })

    return res.join('');
}


const result: string = duplicateEncode('recede');
console.log(result);