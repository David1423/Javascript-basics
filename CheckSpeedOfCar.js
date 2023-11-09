/**
 * 
 * speed limit = 70 km/hr
 * for every 5km/hr after 70km/hr -> 1 point
 * 12 points -> License suspended
 *  
 */

function checkSpeed(speed){
    //const correctedSpeed = Math.floor(speed);
    const speedLimit = 70;

    if ( speed >= speedLimit + 5 ) { 

        let points = Math.floor(( speed-speedLimit ) / 5 );

         return points >= 12 ? 'License Suspended' : 'points : '+points;
    }

    return 'OK';
}

let LicenseStatus = checkSpeed(75);
console.log(LicenseStatus);