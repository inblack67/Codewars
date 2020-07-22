const persistence = (num: number): number => {
    const arr: string[] = num.toString().split('');
    let count: number = 0;
    arr.forEach((item) => 
        {
            let victim: number = Math.pow(+item, arr.length);
            console.log(victim);
            if(victim.toString().length === 1){
                return;
            }
            else{
                victim.toString().split('').forEach(vic => {
                    victim = Math.pow(+vic, victim.toString().split('').length);
                })
            }
            count++;
        }
    );

    return count;
}


console.log(persistence(999));