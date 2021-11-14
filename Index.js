// Coding step 1
let ages = [ 3, 9, 23, 64, 2, 8, 28, 93 ];

//Coding Step 1a
let difference = ages[ ages.length-1 ] -ages[ 0 ];
console.log( difference );

//Coding step 1b
ages.push( 26 );
console.log( difference );

//Coding step 1c

let avg = ages.reduce( function( x, y ){
    return x + y;
})
console.log( avg / ages.length );

// Coding step 2
let names = [ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob" ];

//Coding step 2a
avg = 0;
for( let i = 0; i < names.length; i++ ){
    avg += ( names[i].length/ names.length );
}
console.log( avg );

//coding step 2b
console.log( names.join( " " ) );

//Coding step 3
console.log( names[ names.length - 1 ] );

//Coding step 4
console.log( names[0] );

//Coding step 5
let nameLength = [];

for( let i = 0; i < names.length; i++ ){
    nameLength.push( names[i].length );
}


//Coding step 6
let sumOfName = 0;
for( i = 0; i < nameLength.length; i++ ) {
    sumOfName += nameLength[i];
}

console.log( sumOfName );

//Coding step 7 
function twoParameters( word, n ){

    let space = "";

    for( let i = 1; i <= n; i++ ){
        space += word;
    }
    return space;
}

console.log( twoParameters( "bob", 4 ) );

//Coding step 8
function fullName( firstName, lastName ){
    return ( firstName + " " + lastName );
}

console.log( fullName( "heath", "Brown" ) );

//Coding step 9
function nums( arrayX ){
    let sum = 0;
    for ( let i = 0; i < arrayX.length; i++ ){
        sum += arrayX[ i ];
    } if( sum > 100 ) {
        return true ;
    } else
        return false ;
}

console.log( nums( [ 1, 2, 3, 1 ] ) );
console.log( nums( [ 34, 56, 78 ] ) );


//Coding step 10
function avrg( x ){
    let sum = 0;
    for ( let i = 0; i < x.length; i++ ){
        sum += x[ i ];
    }
    return ( sum / x.length );
}

console.log( avrg( [ 1, 2, 3, 1 ] ) );
console.log( avrg( [ 5, 5, 5, 5, 5 ] ) );

//Coding step 11 
function greaterThan( x , y ){
    if( avrg( x ) > avrg( y ) ){
        return true;
    }
    return false;
}

console.log( greaterThan( [ 1, 2, 3, 4, 5 ], [ 2, 3, 4, 5, 6 ] ) );
console.log( greaterThan( [ 10, 11, 12 ], [ 9, 8, 7 ] ) );

//Coding step 12
function willBuyDrink( isHotOutside, moneyInPocket ){
    if( isHotOutside === true && moneyInPocket > 10.50 ){
        return true;
    }
    return false;
}

console.log( willBuyDrink( false, 12.50 ) );
console.log( willBuyDrink( true, 22.30 ) );
console.log( willBuyDrink( true, 10.45 ) );

//Coding step 13
// This function I created to help figure out the tax I was going to have to pay when I register my vehicle. It takes the vehicleMSRP and figures the tax
// based on its value than adds the registration fee and wheel tax to find the total cost when plating my vehicle.
function problemSolver( vehicleMSRP ){
    let wheelTax = 75;
    let registrationFee = 25;
    let motorVehicleTax;
    if ( vehicleMSRP > 35999) {
        motorVehicleTax = vehicleMSRP * .1;
    } else if ( vehicleMSRP < 35999 && vehicleMSRP > 30000) {
        motorVehicleTax = vehicleMSRP * .08;
    } else if ( vehicleMSRP < 30000 && vehicleMSRP > 20000) {
        motorVehicleTax = vehicleMSRP * .07;
    } else {
        motorVehicleTax = vehicleMSRP * .05;
    }

    let totalCost = motorVehicleTax + wheelTax + registrationFee;
    
    console.log( totalCost );

}

problemSolver( 28500 );
problemSolver( 18500 );