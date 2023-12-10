import { Diet } from "./Diet";
import { ReproductionMode } from "./ReproductionMode";
import { Biome } from "./Biome";





export class Animal
{
    protected diet:Diet;
    protected reproductionMode:ReproductionMode;
    protected Biome:Biome;
    isHungry:boolean;
    isSleepy:boolean;
    size:number;
    
    constructor(isHungry: boolean) {
        this.isHungry = isHungry;
      }
}


export class Earthy extends Animal
{
    protected inSavage:string = 'in Savage Cover';
}

export class Crowling extends Earthy 
{

}

export class Snake extends Crowling
{
   

}

export class Elegged extends Earthy
{
    protected leg:string ="leg";
}

export class Horse extends Elegged 
{


}

export class Marine extends Animal 
{

}

export class Mlegged extends Marine 
{

}
export class Crab extends Mlegged
{

}

export class Fish extends Marine
{
   
}

export class Shark extends Fish
{

}
