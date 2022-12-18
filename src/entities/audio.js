import { FighterState } from "../constants/fighter.js";

/*const punch = new Audio("../../sons/punch.wav");
punch.volume = 0.3;*/


export class Sounds{
  constructor(){
    this.jump = new Audio("../../sons/jumping.ogg");
    this.jump.volume = 0.3;

  }
  
  playSound(audio){
    audio.play()
  }

  updatePlayer(player1, player2){
    this.player1 = player1
    this.player2 = player2
  }

  update(time){
    if(this.player1 && this.player2){
      if(this.player1.currentState === FighterState.JUMP_UP || this.player1.currentState === FighterState.JUMP_FORWARD || this.player1.currentState === FighterState.JUMP_BACKWARD || this.player2.currentState === FighterState.JUMP_UP || this.player2.currentState === FighterState.JUMP_FORWARD || this.player2.currentState === FighterState.JUMP_BACKWARD){
        this.playSound(this.jump)
      }
    }
  }

  draw(context){

  }

}