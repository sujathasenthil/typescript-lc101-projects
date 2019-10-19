import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket implements Payload{
    // properties and methods
    name: string;
    totalCapacityKg: number;
    massKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;

    }
    sumMass( items: Payload[] ): number{
        //sum:number;
        let sum = 0;
        for(let i=0; i< items.length; i++)
        {
            sum+=items[i].massKg;
        }
        return sum;
    }
    currentMassKg(): number{
        return(this.sumMass(this.astronauts)+ this.sumMass(this.cargoItems));
    }
    canAdd(item: Payload): boolean{
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg)
            return true;
        else 
            return false;
    }
    addCargo(cargo: Cargo){
        if(this.canAdd(cargo))
        {
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut))
        {
            this.astronauts.push(astronaut);
            return true;
        }
        else
            return false;
    }
 }