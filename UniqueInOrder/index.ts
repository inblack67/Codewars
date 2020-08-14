const uniqueInOrder = (iterable: (number[])|(string)): (number[] | string[]) => {
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

console.log(uniqueInOrder('ABCD'));