import { Biome } from "./Biome";
import { Diet } from "./Diet";
import { ReproductionMode } from "./RepoductionMode";

export class Animal{
    protected diet : Diet;
    protected reproductionMode : ReproductionMode;
    protected biome : Biome;
    protected isHungry : boolean = false;
    protected isSleepy : boolean = false;
    protected size : number;

    constructor(diet:Diet,reprod_mode:ReproductionMode,biome:Biome,size:number){
        this.diet = diet;
        this.reproductionMode = reprod_mode;
        this.biome = biome;
        this.size = size;
    }

    protected cry(){

    }

    protected breath(){

    }

    protected eat(){
        this.cry();
    }

    protected sleep(){

    }
}