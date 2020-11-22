const areSimilar = ( arr1: number[], arr2: number[] ): boolean =>
{
    if ( !arr1 || !arr2 ) { return false; }
    if ( arr1.length === 0 && arr2.length === 0 ) { return true; }
    if ( arr1.length !== arr2.length )
    {
        return false;
    }


    const sortedArr1 = arr1.sort( ( a, b ) => a - b );
    const sortedArr2 = arr2.sort( ( a, b ) => a - b );

    for ( let i = 0; i < sortedArr1.length; i++ )
    {
        const el = sortedArr1[ i ];
        console.log( el );
        if ( Math.pow( el, 2 ) !== sortedArr2[ i ] )
        {
            return false;
        }
    }

    return true;
};

const arr1 = [ 86, 75, 29, 45, 5, 33 ];
const arr2 = [ 7396, 5625, 841, 2025, 25, 1089 ];
console.log( areSimilar( arr1, arr2 ) );
console.log( areSimilar( arr1, null ) );

const sort1 = arr1.sort();
const sort2 = arr2.sort();
console.log( sort1 );
console.log( sort2 );
console.log( Math.pow( 92, 2 ) );