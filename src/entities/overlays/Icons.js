export class Icons{
  constructor(fighters){
    this.image = document.querySelector('img[alt="icons"]');
    this.fighters = fighters;

    this.frames = new Map([


      ['naruto', [274,339,37,32]],

<<<<<<< Updated upstream
      ['kakashi', [139,297,41,33]],

=======

      ['kakashi', [166,619,37,52]],
      ['kakashi2', [139,297,41,33]],

      ['power-bar', [2,14,78,13]],
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    this.drawFrame(context,'naruto',70,31,-1);
    this.drawFrame(context,'kakashi',311 ,31);
=======
    this.drawFrame(context,'naruto2',70,31,-1);
    this.drawFrame(context,'kakashi2',311 ,31);
    this.drawFrame(context,'power-bar',70 ,31);
>>>>>>> Stashed changes
  }

  
  draw(context){
    this.drawIcons(context);
  }
}