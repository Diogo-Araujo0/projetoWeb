import * as control from "/src/InputHandler.js"
import { Fighter } from "/src/entities/fighters/Fighter.js"


const punch = new Audio("../../sons/punch.wav");
punch.volume = 0.3;
const jump = new Audio("../../sons/jumping.mp3");
jump.volume = 0.3;

export class Sound{
  constructor(){
    this.test = 0
  }

  update(time) {
    //if(FighterState.Idle){
      //if(control.isAttacking(0)){
        //punch.play();
      //}
      //if(control.isUp(0)){
        //jump.play();
      //}
    //}
  }

  draw(context){

  }
}