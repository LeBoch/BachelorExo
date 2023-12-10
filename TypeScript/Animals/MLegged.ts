import { Biome } from "./Biome";
import { Diet } from "./Diet";
import { Marine } from "./Marine";
import { ReproductionMode } from "./RepoductionMode";

export class MLegged extends Marine{
    protected legs : number;

    constructor(diet: Diet, reprod_mode: ReproductionMode, biome: Biome, size: number, breathUnderwater: boolean, min_depth: number, max_depth: number,legs:number){
        super(diet,reprod_mode,biome,size,breathUnderwater,min_depth,max_depth);
        this.legs = legs;
    }
}