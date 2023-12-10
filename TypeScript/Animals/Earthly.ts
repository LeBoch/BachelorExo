import { Animal } from "./Animal";
import { Biome } from "./Biome";
import { Cover } from "./Cover";
import { Diet } from "./Diet";
import { ReproductionMode } from "./RepoductionMode";

export class Earthly extends Animal{
    protected isSavage:boolean;
    protected cover : Cover;

    constructor(diet:Diet,reprod_mode:ReproductionMode,biome:Biome,size:number,isSavage:boolean,cover:Cover){
        super(diet,reprod_mode,biome,size);
        this.isSavage = isSavage;
        this.cover = cover;
    }
}