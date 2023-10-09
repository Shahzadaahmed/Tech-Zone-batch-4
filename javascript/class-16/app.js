// var righeNow = new Date();
// console.log(righeNow.getMilliseconds());

// console.log(righeNow.getTime());









// var righeNow = new Date();
// console.log(righeNow);

// var bDay = new Date("July 8 1996");
// console.log(bDay);

// var calculateYears = righeNow.getFullYear() - bDay.getFullYear();
// console.log(calculateYears);



var righeNow = new Date();
console.log(righeNow);

var bDay = new Date("July 8 1996");
console.log(bDay);

// Now converting both dates in mili seconds...!
var rightNowInMS = righeNow.getTime();
// console.log(rightNowInMS);

var bDayInMS = bDay.getTime();
// console.log(bDayInMS);

var calculateMS = rightNowInMS - bDayInMS;
// console.log(calculateMS);

var applyFormula = calculateMS / (1000 * 60 * 60 * 24 * 365);
applyFormula = Math.floor(applyFormula);
console.log(applyFormula);