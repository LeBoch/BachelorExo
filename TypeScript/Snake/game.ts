import { Apple } from "./apple.js";
import { Direction } from "./direction.js";
import { Display } from "./display.js";
import { Snake } from "./snake.js";

export class Game {
    protected isFinish: boolean = false
    protected direction:Direction = Direction.RIGHT
    protected height: number
    protected display: Display
    protected width: number
    protected snake: Snake
    protected apple: Apple
    private speed: number

    constructor(width: number, height: number, scale: number, speed: number) {
        this.height = height
        this.width = width
        this.speed = speed
        this.apple = new Apple(2, 4)
        this.snake = new Snake(15, 15)
        this.display = new Display(width, height, scale)
    }

    getApple(): Apple {
        return this.apple
    }

    getSnake(): Snake {
        return this.snake
    }

    resetApple() {
        let x: number = 0
        let y: number = 0;
        let isTouch: boolean = true
        while (isTouch == true) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
            if(this.snake.touch(x, y)==true){
                isTouch = true
            }else{
                isTouch = false
            }
        }
        this.apple.setApple(x,y)
    }


    test() {
        this.display.draw(this)
    }
    play() {
        let lastChrono: number = 0;
        const loop = (chrono: number) => {
            if (lastChrono === 0) lastChrono = chrono;
            if (chrono - lastChrono >= this.speed) {
                this.gameplayLoop()
                lastChrono = chrono;
                // Logique...
            };
            if (true)
                requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    }

    move(){
        while(this.isFinish==false){
            this

        }
    }
    gameplayLoop(){ 
        this.snake.growHead(this.direction)
        this.snake.cropTail()
        this.display.draw(this)
    }
    createEventListener(){
        KeyboardEvent.
    }

}