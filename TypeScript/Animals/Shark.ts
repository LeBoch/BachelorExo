import { Biome } from "./Biome";
import { Diet } from "./Diet";
import { Fish } from "./Fish";

export class Shark extends Fish{

    constructor(){
        super(Diet.CARNIVOROUS,Biome.OCEAN,1.5,270,4165,true);
    }

    protected override cry(): void {
        console.log("BWAAAAAH");
    }
}