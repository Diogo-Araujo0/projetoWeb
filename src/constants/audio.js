import * as control from "/src/InputHandler.js"

const punch = new Audio("/imagens/punch.wav");
punch.volume = 0.5;

export class Sound{
  constructor(){
    this.test = 0
  }
  update(time) {
    if(control.isAttacking(0)){
      punch.play();
    }
  }
}