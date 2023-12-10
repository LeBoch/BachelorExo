import { Biome } from "./Biome";
import { Diet } from "./Diet";
import { MLegged } from "./MLegged";
import { ReproductionMode } from "./RepoductionMode";

export class Crab extends MLegged{

    constructor(){
        super(Diet.CARNIVOROUS,ReproductionMode.VIVIPAROUS,Biome.OCEAN,40,true,400,10, 100);
    }
}