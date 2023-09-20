/**
 * 
 * speed limit = 70
 * for every 5 -> 1 point
 * 12 points -> License suspended
 *  
 */

function checkSpeed(speed){
    let correctedSpeed = Math.floor(speed);
    let speedLimit = 70;

    if ( correctedSpeed > 70 ) {

        let points = Math.floor(( correctedSpeed-70 ) / 5 ); 
        
         return points > 12 ? 'License Suspended' : 'OK';
    }

    return 'OK';
}

let LicenseStatus = checkSpeed(200);
console.log('Your License Status :',LicenseStatus);