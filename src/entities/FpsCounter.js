import { DEBUG } from "../constants/game.js"
export class FpsCounter {
  constructor() {
    this.fps = 0
  }

  update(time) {
    this.fps = Math.trunc(1 / time.secondsPassed)
  }

  draw(context) {
    if(DEBUG){
      context.font = "14px Arial"
      context.fillStyle = "#00FF00"
      context.textAlign = "right"
      context.fillText(`FPS: ${this.fps}`, context.canvas.width - 2, context.canvas.height -2)
    }
  }
}
