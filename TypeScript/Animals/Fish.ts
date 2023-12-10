import { Biome } from "./Biome";
import { Diet } from "./Diet";
import { Marine } from "./Marine";
import { ReproductionMode } from "./RepoductionMode";

export class Fish extends Marine{
    protected isSavage : boolean;

    constructor(diet:Diet,biome:Biome,size:number,min_depth:number,max_depth:number,isSavage:boolean){
        super(diet,ReproductionMode.OVIPAROUS,biome,size,true,min_depth,max_depth);
        this.isSavage = isSavage;
    }
}