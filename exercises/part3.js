// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
//function myFunction(x: number): number {
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedMph;
    return (hours / 24);
}
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log("Determination would take " + getDaysToLocation(kilometersToMars) + " days to get to Mars.");
console.log("Determination would take " + getDaysToLocation(kilometersToTheMoon) + " days to get to Moon.");
