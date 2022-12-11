import {GAME_DURATION} from '../../constants/game.js';

export class StatusBar{
  constructor(fighters){
    this.image = document.querySelector('img[alt="overlay"]');

    this.time = GAME_DURATION;
    this.timeTimer = 0;
    this.fighters = fighters;
    this.result = -2;
    this.frames = new Map([
      ['health-bar', [16,18,145,11]],

      ['ko-white', [161,16,32,14]],

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
    ]);
  }

  drawFrame(context,frameKey, x, y, direction = 1 ){
    const [sourceX, sourceY, sourceWidth, sourceHeight] = this.frames.get(frameKey);

    context.scale(direction, 1);
    context.drawImage(
      this.image,
      sourceX, sourceY, sourceWidth, sourceHeight,
      x * direction, y, sourceWidth, sourceHeight,
    );
    context.setTransform(1, 0, 0, 1, 0, 0)
  }

  updateTime(time){
    if(time.previous > this.timeTimer + 664){
      if(this.time >  0) {
        this.time -= 1
      }else{
        this.isOver = true
      }
      this.timeTimer = time.previous
      
    }
  }

  update(time){
    this.updateTime(time);
  }

  drawHealthBars(context){
    this.drawFrame(context,'health-bar',31,20);
    this.drawFrame(context,'ko-white',176,18);
    this.drawFrame(context,'health-bar',353 ,20 ,-1);
  }

  drawTime(context){
    if(this.time > 0){
      const timeString = String(this.time).padStart(2, '00');
      this.drawFrame(context, `time-${timeString.charAt(0)}`, 178,33);
      this.drawFrame(context, `time-${timeString.charAt(1)}`, 194,33);
    }
  }

  drawResult(context){
    if(this.result === -1){
      this.drawFrame(context, `draw-game`, 163, 107)
    }
    else if(this.result === 0){
        console.log("Player 1 win")
    }else{
      console.log("Player 2 win")
    }
  }
  
  draw(context){
    this.drawHealthBars(context);
    this.drawTime(context);
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

  changeGameResult(playerId){
    this.result = playerId
  }
}