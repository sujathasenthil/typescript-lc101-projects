var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// The variables that are commented out will be moved into the Spacecraft class
//
// This function will also be moved into the Spacecraft class
// 
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.spaceCraft = "Space Shuttle";
        this.speedMph = 17500;
        this.milesPerKilometer = 0.621;
        this.spaceCraft = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
console.log(spaceShuttle.spaceCraft + " would take " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to get to Mars.\n");
console.log(spaceShuttle.spaceCraft + " would take " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to get to Moon.\n");
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
