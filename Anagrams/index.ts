const purifyString = ( str: string ): string =>
{
    return str.toLowerCase().split( '' ).sort().join( '' );
};

const isAnagram = ( str1: string, str2: string ): boolean =>
{
    return purifyString( str1 ) === purifyString( str2 );
};

const anagrams = ( str: string, arr: string[] ): string[] =>
{
    const res = [];
    arr.forEach( el =>
    {
        if ( isAnagram( str, el ) )
        {
            res.push( el );
        }
    } );
    return res;
};





console.log( anagrams( 'abba', [ 'aabb', 'abcd', 'bbaa', 'dada' ] ) );
console.log( anagrams( 'racer', [ 'crazer', 'carer', 'racar', 'caers', 'racer' ] ) );
console.log( anagrams( 'laser', [ 'lazing', 'lazy', 'lacer' ] ) );