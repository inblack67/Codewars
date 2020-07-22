function list2(names: { name: string }[]): string{
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }

const list = (names: { name: string }[]): string => {
    const commaNames: { name: string }[] = names.splice(0, names.length - 2);
    let res = '';
    commaNames.forEach(item => {
        res += `${item.name}, `;
    });
    names.forEach(item => {
        res += `${item.name} & `;
    })
    const result: string = res.slice(0, res.length - 3);
    return result;
}

console.log(
    list2(
        [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]
    )
);