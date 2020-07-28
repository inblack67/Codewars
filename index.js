const largestNumber = arr => arr.reduce((prev, curr) => curr > prev ? curr : prev);


console.log(largestNumber([1,2,3,4,5, 6,9,0,-1,45,28,67,3492]));