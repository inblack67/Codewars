const sortTheOdd = (arr: number[]): number[] => {
    const sortedOdds: number[] = arr.filter(item => item % 2 !== 0).sort();

    return sortedOdds;
}

const isOdd = (num: number): boolean => num % 2 === 0;
console.log(isOdd(2));


sortTheOdd([5, 3, 2, 8, 1, 4]);