import { Apple } from "./apple.js";
import { Direction } from "./direction.js";
import { Display } from "./display.js";
import { Snake } from "./snake.js";
export class Game {
    constructor(width, height, scale, speed) {
        this.isFinish = false;
        this.direction = Direction.RIGHT;
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.apple = new Apple(2, 4);
        this.snake = new Snake(15, 15);
        this.display = new Display(width, height, scale);
    }
    getApple() {
        return this.apple;
    }
    getSnake() {
        return this.snake;
    }
    resetApple() {
        let x = 0;
        let y = 0;
        let isTouch = true;
        while (isTouch == true) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
            if (this.snake.touch(x, y) == true) {
                isTouch = true;
            }
            else {
                isTouch = false;
            }
        }
        this.apple.setApple(x, y);
    }
    test() {
        this.display.draw(this);
    }
    play() {
        let lastChrono = 0;
        const loop = (chrono) => {
            if (lastChrono === 0)
                lastChrono = chrono;
            if (chrono - lastChrono >= this.speed) {
                this.gameplayLoop();
                lastChrono = chrono;
                // Logique...
            }
            ;
            if (true)
                requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
    move() {
        while (this.isFinish == false) {
            this;
        }
    }
    gameplayLoop() {
        this.snake.growHead(this.direction);
        this.snake.cropTail();
        this.display.draw(this);
    }
    createEventListener() {
        KeyboardEvent.DOM_KEY_LOCATION_LEFT;
    }
}
