const isChar = ( letter: string ): boolean =>
{
    const regex = /[a-z]/gi;
    return regex.test( letter );
};

const nextLetter = ( letter: string, jump = 1 ): string =>
{
    const isCaps = letter === letter.toUpperCase();
    const code = letter.charCodeAt( 0 ) + jump;
    if ( isCaps )
    {
        return String.fromCharCode( ( code - 64 ) % 26 + 65 );

    }
    else
    {
        return String.fromCharCode( ( code - 96 ) % 26 + 97 );
    }
};


const rot13 = ( word: string ): string =>
{
    const wordArr = word.split( '' );
    console.log( wordArr );
    const cipheredArr = wordArr.map( ( letter: string ) =>
    {
        if ( !isChar( letter ) )
        {
            return letter;
        }
        return nextLetter( letter );
    } );
    return cipheredArr.join( '' );
};

const word = '$1aman$';
console.log( rot13( word ) );