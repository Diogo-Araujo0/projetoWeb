export class Icons{
  constructor(fighters){
    this.image = document.querySelector('img[alt="icons"]');
    this.fighters = fighters;

    this.frames = new Map([


      ['naruto', [274,339,37,32]],

      ['kakashi', [139,297,41,33]],

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
  update(){

  }

  drawIcons(context){
    this.drawFrame(context,'naruto',70,31,-1);
    this.drawFrame(context,'kakashi',311 ,31);
  }

  
  draw(context){
    this.drawIcons(context);
  }
}