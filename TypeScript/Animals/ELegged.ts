import { Biome } from "./Biome";
import { Cover } from "./Cover";
import { Diet } from "./Diet";
import { Earthly } from "./Earthly";
import { ReproductionMode } from "./RepoductionMode";

export class ELegged extends Earthly{
    protected legs : number;

    constructor(diet:Diet,reprod_mode:ReproductionMode,biome:Biome,size:number,isSavage:boolean,cover:Cover,legs:number){
        super(diet,reprod_mode,biome,size,isSavage,cover);
        this.legs = legs;
    }

    public getLegs():number {
        return this.legs;
    }
}