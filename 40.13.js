/* Написать функцию, которая принимает числовое значение скорости и возвращает сообщение в зависимости от скорости.
За превышение скорости на каждые 5 км/ч начисляется 1 балл (если максимально разрешенная скорость 70 км/ч, а переданное значение
скорости - 80 км/ч, то будет начислено 2 балла) и возвращается сообщение "Points: n", где n - количество полученных баллов.
При достижении 12 баллов и выше, должно возвращаться сообщение: "License suspended". Если скорость находится в пределах максимальной,
возвращается сообщение: "OK". Если передано отрицательное значение скорости, возвращается "Speed value can't be negative" */

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