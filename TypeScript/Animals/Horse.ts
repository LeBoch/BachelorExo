import { Biome } from "./Biome";
import { Cover } from "./Cover";
import { Diet } from "./Diet";
import { ELegged } from "./ELegged";
import { ReproductionMode } from "./RepoductionMode";

export class Horse extends ELegged{

    constructor(diet: Diet, reprod_mode: ReproductionMode, biome: Biome, size: number, isSavage: boolean, cover: Cover, legs: number){
        super(Diet.HEBRIVOROUS,ReproductionMode.VIVIPAROUS,Biome.DESERT,100,true,Cover.FEATHERS,100);
    }
}