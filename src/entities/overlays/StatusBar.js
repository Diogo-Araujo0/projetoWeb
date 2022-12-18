import {GAME_DURATION, GAME_RESULT} from '../../constants/game.js'
import { Fighter } from '../fighters/Fighter.js'

const dattebayo = new Audio("/sons/dattebayo.mp3");
dattebayo.volume = 0.3;

export class StatusBar{4
  
  constructor(fighters){
    this.image = document.querySelector('img[alt="overlay"]')

    this.time = GAME_DURATION
    this.timeTimer = 0
    this.fighters = fighters
    this.result = -1
    this.winnerName = ''
    this.isTimeFreeze = false
    
    this.frames = new Map([
      ['health-bar', [16,18,145,11]],
      ['death-bar', [16,4,145,11]],
      ['death-bar-90', [16,4,130,11]],
      ['death-bar-80', [16,4,115,11]],
      ['death-bar-70', [16,4,100,11]],
      ['death-bar-60', [16,4,85,11]],
      ['death-bar-50', [16,4,70,11]],
      ['death-bar-40', [16,4,55,11]],
      ['death-bar-30', [16,4,40,11]],
      ['death-bar-20', [16,4,25,11]],
      ['death-bar-10', [16,4,10,11]],
      ['death-bar-00', [16,4,0,11]],


      ['ko-white', [161,16,32,14]],
      ['ko-red', [161,1,32,14]],


      ['time-0', [16,32,14,16]],
      ['time-1', [32,32,14,16]],
      ['time-2', [48,32,14,16]],
      ['time-3', [64,32,14,16]],
      ['time-4', [80,32,14,16]],
      ['time-5', [96,32,14,16]],
      ['time-6', [112,32,14,16]],
      ['time-7', [128,32,14,16]],
      ['time-8', [144,32,14,16]],
      ['time-9', [160,32,14,16]],

      ['fight', [16,168,63,18]],
      ['time-over', [352,112,65,30]],
      ['draw-game', [427,114,59,26]],
      ['number-1', [29, 101,10,10]],
      ['number-2', [41,101,10,10]],
      ['letter-p',[17,125,11,10]],
      ['letter-w', [101,125,11,10]],
      ['letter-i', [127,113,5,10]],
      ['letter-n', [185, 113, 11,10]],
      ['letter-k', [149,113,10,10]],
      ['letter-a', [29,113,11,10]],
      ['letter-r', [41,125,11,10]],
      ['letter-u', [77,125,10,10]],
      ['letter-t', [65,125,10,10]],
      ['letter-o', [197,113,10,10]],
      ['letter-s', [53,125,10,10]],
      ['letter-h', [113,113,10,10]],
      
    ])
  }

  drawFrame(context,frameKey, x, y, direction = 1 ){
    const [sourceX, sourceY, sourceWidth, sourceHeight] = this.frames.get(frameKey)

    context.scale(direction, 1)
    context.drawImage(
      this.image,
      sourceX, sourceY, sourceWidth, sourceHeight,
      x * direction, y, sourceWidth, sourceHeight,
    )
    context.setTransform(1, 0, 0, 1, 0, 0)
  }

  updateTime(time){
    if(time.previous > this.timeTimer + 664){
      if(this.time >  0 && !this.isTimeFreeze) {
        this.time -= 1
      }
      this.timeTimer = time.previous
      
    }
  }
  update(time){
    this.updateTime(time)
  }

  drawHealthBars(context){
    this.drawFrame(context,'health-bar',31,20)
    this.drawFrame(context,'ko-white',176,18)
    this.drawFrame(context,'health-bar',353 ,20 ,-1)
  }
  drawDeathBars(context){
    this.drawFrame(context,'death-bar',31,20)
    this.drawFrame(context,'death-bar',353 ,20 ,-1)
  }


  drawTime(context){
    if(this.time > 0){
      const timeString = String(this.time).padStart(2, '00')
      this.drawFrame(context, `time-${timeString.charAt(0)}`, 178,33)
      this.drawFrame(context, `time-${timeString.charAt(1)}`, 194,33)
    }
  }

  drawResult(context){
    if(this.result === GAME_RESULT.DRAW){
      this.drawFrame(context, `draw-game`, 163, 107)
    }
    else if(this.result === GAME_RESULT.WIN){
      if(this.winnerName == "Naruto"){
        dattebayo.play();
        this.drawFrame(context, `letter-n`, 142, 107)
        this.drawFrame(context, `letter-a`, 153, 107)
        this.drawFrame(context, `letter-r`, 164, 107)
        this.drawFrame(context, `letter-u`, 174, 107)
        this.drawFrame(context, `letter-t`, 184, 107)
        this.drawFrame(context, `letter-o`, 194, 107)
        this.drawFrame(context, `letter-w`, 215, 107)
        this.drawFrame(context, `letter-i`, 226, 107)
        this.drawFrame(context, `letter-n`, 231, 107)
      }
      else if(this.winnerName == "Kakashi"){
        this.drawFrame(context, `letter-k`, 142, 107)
        this.drawFrame(context, `letter-a`, 152, 107)
        this.drawFrame(context, `letter-k`, 163, 107)
        this.drawFrame(context, `letter-a`, 173, 107)
        this.drawFrame(context, `letter-s`, 184, 107)
        this.drawFrame(context, `letter-h`, 194, 107)
        this.drawFrame(context, `letter-i`, 204, 107)
        this.drawFrame(context, `letter-w`, 217, 107)
        this.drawFrame(context, `letter-i`, 228, 107)
        this.drawFrame(context, `letter-n`, 233, 107)
      }
    }
  }
  
  draw(context){
    this.drawHealthBars(context)
    this.drawDeathBars(context)

    this.drawTime(context)
    if(this.time <= 0){
      this.drawFrame(context, `time-over`, 161, 33)
    }

    if(this.time >= GAME_DURATION - 1){
      this.drawFrame(context, `fight`, 163, 106)
    }

    if (this.result != -2){
      this.drawResult(context)
    }
  }

  changeGameResult(gameResult, playerName){
    this.result = gameResult
    this.winnerName = playerName
  }

  freezeClock(){
    this.isTimeFreeze = true
  }
}