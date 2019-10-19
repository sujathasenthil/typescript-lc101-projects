let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;


// The variables that are commented out will be moved into the Spacecraft class
//
// This function will also be moved into the Spacecraft class
// 

// Define your Spacecraft class here:

class Spacecraft{
    spaceCraft: string = "Space Shuttle";
    speedMph: number = 17500;
    milesPerKilometer: number = 0.621;
    getDaysToLocation(kilometersAway: number): number {
         let milesAway: number = kilometersAway * this.milesPerKilometer;
         let hours: number = milesAway / this.speedMph;
         return hours / 24;
        }   
    
    constructor(name: string, speedMph: number) {
        this.spaceCraft = name;
        this.speedMph =speedMph;
     }
}

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
console.log(`${spaceShuttle.spaceCraft} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.
`);
console.log(`${spaceShuttle.spaceCraft} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to Moon.
`);

// Print two outputs - one for the trip to Mars and one for the trip to the moon.

