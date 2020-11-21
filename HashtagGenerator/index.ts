const capitalizedInitials = ( word: string ): string =>
{
    if ( word.length === 0 ) { return; }
    const wordArr = word.trim().split( '' );
    const res = wordArr[ 0 ].toUpperCase() + wordArr.splice( 1 );
    return res.split( ',' ).join( '' );
};

const generateHashtag = ( str: string ): boolean | string =>
{
    const trimmedStr = str.trim();
    const limit = 140;
    if ( trimmedStr.length === 0 )
    {
        return false;
    }
    const resArr = trimmedStr.trim().split( ' ' );
    const capsResArr = resArr.map( word =>
    {
        return capitalizedInitials( word );
    } );
    capsResArr.unshift( '#' );
    const res = capsResArr.join( '' );
    if ( res.length > limit || res.length === 0 )
    {
        return false;
    }
    return res;
};

console.log( generateHashtag( 'Do we have a hashtag' ) );