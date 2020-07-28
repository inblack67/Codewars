const largestNumber = (arr: number[]): number => arr.reduce((prev, curr) => curr > prev ? curr : prev);


console.log(largestNumber([100,2,3,4,5, 6,9,0,-1,45,28,67,3492]));