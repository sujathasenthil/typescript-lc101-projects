// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:
//function myFunction(x: number): number {
function getDaysToLocation(kilometersAway: number):number {
    const milesAway= kilometersAway * milesPerKilometer;
    const hours = milesAway / speedMph;
    return(hours / 24);
}

// Call the function and print the outputs for the Mars trip and the moon trip:


console.log(`Determination would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
console.log(`Determination would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Moon.`);
