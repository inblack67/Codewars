const domainName = ( url: string ): string =>
{
    // const domain = url.match( /(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i )[ 1 ];

    let res = url.replace( 'https://', '' );
    res = url.replace( 'http://', '' );
    res = url.replace( 'www.', '' );
    const domain = res.split( '.' )[ 0 ];

    console.log( domain );

    return domain;
};

console.log( domainName( "http://github.com/carbonfive/raygun" ) );
console.log( domainName( "http://www.zombie-bites.com" ) );
console.log( domainName( "https://www.cnet.com" ) );
console.log( domainName( "http://google.com" ) );
console.log( domainName( "http://google.co.jp" ) );
console.log( domainName( "https://youtube.com" ) );
console.log( domainName( "www.xakep.ru" ) );