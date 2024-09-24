// Code your solution in this file!
const headquarters = 42;

function distanceFromHqInBlocks(block){
    return Math.abs(block - headquarters);
}

const distance = distanceFromHqInBlocks (43);
console.log(distance);

function distanceFromHqInFeet(block){
// each block is 264 feet long
const distanceInBlocks = distanceFromHqInBlocks (block)
    return distanceInBlocks * 264;
}
const distanceInFeetA = distanceFromHqInFeet (43)
const distanceInFeetB = distanceFromHqInFeet (50)
const distanceInFeetC = distanceFromHqInFeet (42)
console.log(distanceInFeetA);
console.log(distanceInFeetB);
console.log(distanceInFeetC);

function distanceTravelledInFeet (from,to){
//returns the distance covered in feet
const distanceInBlocks = Math.abs(to - from)
return distanceInBlocks * 264;
}
const distanceA= distanceTravelledInFeet(43,48);
const distanceB= distanceTravelledInFeet(50,60);
const distanceC= distanceTravelledInFeet(34,28);
console.log(distanceA);
console.log(distanceB);
console.log(distanceC);

function calculatesFarePrice (start, destination){
    // returns the fare for the customer
const distanceCovered = Math.abs(destination - start)*264;
if (distanceCovered <= 400) {
    return 0; // Free for the first 400 feet
} else if (distanceCovered > 400 && distanceCovered <= 2000) {
    const fare = (distanceCovered - 400) * 0.02; 
    return fare;
} else if (distanceCovered > 2000 && distanceCovered <= 2500) {
    return 25; 
} else {
    return 'cannot travel that far'; // Distance exceeds limit
}
}























