const alphaPositions = (str: string): string => {
    let regex: RegExp = /[a-z]/gi;
    const resArr: number[] = [];
    const pure: string[] = str.toLowerCase().split('').filter(w => w.match(regex));
    pure.forEach((w, index) => {
        resArr.push(w.charCodeAt(0) - 96);
    })
    return resArr.join(' ');
}

const result: string = alphaPositions("The sunset sets at twelve o' clock.");
console.log(result);