function checkSpeed(speed){
    if(typeof(speed) !== 'number'){
        return 'Speed must be a number';
    }
    console.log(speed)
    const speedLimit = 70;
    const speedOfSuspendindLicense = 130;
    let overSpeed = speed - speedLimit;
    const kmPerPoint = 5;
    let pointsForSuspendingLicense = (speedOfSuspendindLicense - speedLimit)/kmPerPoint;
    let maxQuantityOfNegativePoints = (0 - speedLimit)/kmPerPoint;
    let points = Math.floor(overSpeed/kmPerPoint);
    // let points = (overSpeed/kmPerPoint);
    return points > 0 ? (points < pointsForSuspendingLicense ? (`Points: ${points}`) : ('License suspended')) : (points >= maxQuantityOfNegativePoints  ? ('OK') : (`Speed value can't be negative`));
}

  
console.log(checkSpeed());
console.log(checkSpeed(""));
console.log(checkSpeed(null));
console.log(checkSpeed(Infinity));
console.log(checkSpeed(75));
console.log(checkSpeed(74));
console.log(checkSpeed(0));
console.log(checkSpeed(130));
console.log(checkSpeed({d:129.99999}));
console.log(checkSpeed(-12));