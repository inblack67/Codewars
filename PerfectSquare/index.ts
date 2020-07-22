const isPerfectSquare = (num: number): boolean => {
    const sqrt: number = Math.sqrt(num);

    // working with floor too
    if(sqrt === Math.ceil(sqrt)){
        return true;
    }
    return false;
}

console.log(isPerfectSquare(16));