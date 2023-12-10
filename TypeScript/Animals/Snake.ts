import { Biome } from "./Biome";
import { Cover } from "./Cover";
import { Crawling } from "./Crawling";
import { Diet } from "./Diet";
import { ReproductionMode } from "./RepoductionMode";

export class Snake extends Crawling{


    constructor(){
        super(Diet.CARNIVOROUS,ReproductionMode.OVIPAROUS,Biome.DESERT, 100,true, Cover.SCALES);
    }
}