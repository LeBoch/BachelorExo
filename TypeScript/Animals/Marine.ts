import { Animal } from "./Animal"
import { Biome } from "./Biome";
import { Diet } from "./Diet";
import { ReproductionMode } from "./RepoductionMode";

export class Marine extends Animal{
    private breathUnderwater : boolean;
    private min_depth : number;
    private max_depth : number;

    constructor(diet:Diet,reprod_mode:ReproductionMode,biome:Biome,size:number,breathUnderwater:boolean,min_depth:number,max_depth:number){
        super(diet,reprod_mode,biome,size);
        this.breathUnderwater = breathUnderwater;
        this.min_depth = min_depth;
        this.max_depth = max_depth;
    }
}