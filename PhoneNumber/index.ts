const createPhoneNumber = (arr: number[]): string => {
    const code: number[] = arr.splice(0, 3);
    const primary: number[] = arr.splice(0, 3);
    const secondary: number[] = arr;
    const res: string = `(${code.join('')}) ${primary.join('')}-${secondary.join('')}`

    return res;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
