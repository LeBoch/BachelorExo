import { Biome } from "./Biome";
import { Cover } from "./Cover";
import { Diet } from "./Diet";
import { Earthly } from "./Earthly";
import { ReproductionMode } from "./RepoductionMode";

export class Crawling extends Earthly{

    constructor(diet: Diet, reprod_mode: ReproductionMode, biome: Biome, size: number, isSavage: boolean, cover: Cover){
        super(diet,reprod_mode,biome,size,isSavage,cover);
    }
}