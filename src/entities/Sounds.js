import { FighterState } from "../constants/fighter.js";

export class Sounds{
  constructor(){
    this.jump = new Audio("../../audio/jumping.ogg")
    this.jump.volume = 0.3
    this.run = new Audio("../../audio/running.ogg")
    this.run.volume = 1
    
    this.attackNaruto = new Audio("../../audio/naruto-attack.ogg")
    this.attackNaruto.volume = 0.3
    this.damageNaruto = new Audio("../../audio/naruto-hurt.ogg")
    this.damageNaruto.volume = 0.5
    this.winNaruto = new Audio("../../audio/naruto-win.ogg")
    this.winNaruto.volume = 0.5

    this.attackKakashi = new Audio("../../audio/kakashi-attack.ogg")
    this.attackKakashi.volume = 0.3
    this.damageKakashi = new Audio("../../audio/kakashi-hurt.ogg")
    this.damageKakashi.volume = 0.5
    this.winKakashi = new Audio("../../audio/kakashi-win.ogg")
    this.winKakashi.volume = 0.5
  }
  
  playSound(audio){
    audio.play()
  }

  stopAudio(audio){
    audio.pause()
    audio.currentTime = 0
  }

  updatePlayer(player1, player2){
    this.player1 = player1
    this.player2 = player2
  }

  update(time){
    if(this.player1 && this.player2){
      if(this.player1.currentState === FighterState.JUMP_UP || this.player1.currentState === FighterState.JUMP_FORWARD || this.player1.currentState === FighterState.JUMP_BACKWARD || this.player2.currentState === FighterState.JUMP_UP || this.player2.currentState === FighterState.JUMP_FORWARD || this.player2.currentState === FighterState.JUMP_BACKWARD){
        this.playSound(this.jump)
      }else if(this.player1.currentState === FighterState.WALK_BACKWARD || this.player1.currentState === FighterState.WALK_FORWARD || this.player2.currentState === FighterState.WALK_BACKWARD || this.player2.currentState === FighterState.WALK_FORWARD){
        this.playSound(this.run)
      }else if(this.player1.currentState === FighterState.DAMAGE){
        if(this.player1.name == "Naruto"){
          this.playSound(this.damageNaruto)
        }else if(this.player1.name == "Kakashi"){
          this.playSound(this.damageKakashi)
        }
      }else if(this.player2.currentState === FighterState.DAMAGE){
          if(this.player2.name == "Naruto"){
            this.playSound(this.damageNaruto)
          }else if(this.player2.name == "Kakashi"){
            this.playSound(this.damageKakashi)
          }
      }else if(this.player1.currentState === FighterState.ATTACK){
        if(this.player1.name == "Naruto"){
          this.playSound(this.attackNaruto)
        }else if(this.player1.name == "Kakashi"){
          this.playSound(this.attackKakashi)
        }
      }else if(this.player2.currentState === FighterState.ATTACK){
        if(this.player2.name == "Naruto"){
          this.playSound(this.attackNaruto)
        }else if(this.player2.name == "Kakashi"){
          this.playSound(this.attackKakashi)
        }
      }else if(this.player1.currentState === FighterState.WIN){
        if(this.player1.name == "Naruto"){
          this.playSound(this.winNaruto)
        }else if(this.player1.name == "Kakashi"){
          this.playSound(this.winKakashi)
        }
      }else if(this.player2.currentState === FighterState.WIN){
        if(this.player2.name == "Naruto"){
          this.playSound(this.winNaruto)
        }else if(this.player2.name == "Kakashi"){
          this.playSound(this.winKakashi)
        }
      }
      else{
        this.stopAudio(this.run)
        this.stopAudio(this.jump)
      }
    }
  }

  draw(context){

  }

}