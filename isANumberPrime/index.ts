const is_prime = (num: number): boolean => {

    if(num <= 1){
        return false;
    }

    for (let index = 2; index <= num / 2; index++) {
        if(num % index === 0){
            return false;
        }
    }

    return true;
}

console.log(is_prime(9));