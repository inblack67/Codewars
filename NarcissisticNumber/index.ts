const isNarcissist = (num: number): boolean => {
    const arr: string[] = num.toString().split('');
    const digits: number = arr.length;

    const sum: number = arr.reduce((prev: number, current: number | string) => {
        prev += Math.pow(+current, digits);
        return prev;
    },0)

    if(sum === num){
        return true;
    }
    return false;

}

// 153 -> 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// where 3 is number of digits and base is 10
console.log(isNarcissist(153));