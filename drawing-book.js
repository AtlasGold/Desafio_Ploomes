function pageCount(n, p) {
    
    if (p == 1 || p == n ) return 0; 
    
    let rigthToLeft = 0;
    const leftToRigth = Math.floor( p / 2 ); /* com bitwise ficaria: ( p / 2 ) | 0 */

    if ( n % 2 === 0 )      /* Poderia verificar par ou impar com: if( n & 1 ) */
    {  
        rigthToLeft = Math.floor(( n - p  + 1 ) / 2 );
    } 
    else 
    { 
        rigthToLeft = Math.floor(( n - p ) / 2 );
    }
    
    return Math.min( rigthToLeft, leftToRigth ); 
     
}
