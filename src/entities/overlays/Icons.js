export class Icons{
  constructor(fighters){
    this.image = document.querySelector('img[alt="icons"]');
    this.fighters = fighters;

    this.frames = new Map([


      ['naruto', [274,339,37,32]],


      ['kakashi', [166,619,37,52]],
      ['kakashi2', [139,297,41,33]],

      ['gaara', [165,96,37,37]],

      ['power-bar', [2,14,78,13]],
      ['blue-square', [8,129,8,7]],
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
    this.drawFrame(context,'power-bar',143 ,31,-1);
    this.drawFrame(context,'power-bar',237 ,31);
    if(this.player1.specialAttack >= 10){
      this.drawFrame(context,'blue-square',60 ,34);
    }if(this.player1.specialAttack >= 20){
      this.drawFrame(context,'blue-square',68 ,34);
    }if(this.player1.specialAttack >= 30){
      this.drawFrame(context,'blue-square',76 ,34);
    }if(this.player1.specialAttack >= 40){
      this.drawFrame(context,'blue-square',84 ,34);
    }if(this.player1.specialAttack >= 50){
      this.drawFrame(context,'blue-square',92 ,34);
    }if(this.player1.specialAttack >= 60){
      this.drawFrame(context,'blue-square',100 ,34);
    }if(this.player1.specialAttack >= 70){
      this.drawFrame(context,'blue-square',108 ,34);
    }if(this.player1.specialAttack >= 80){
      this.drawFrame(context,'blue-square',116 ,34);
    }if(this.player1.specialAttack >= 90){
      this.drawFrame(context,'blue-square',124 ,34);
    }if(this.player1.specialAttack >= 100){
      this.drawFrame(context,'blue-square',132 ,34);
    }

    if(this.player2.specialAttack >= 10){
      this.drawFrame(context,'blue-square',312,34);
    }if(this.player2.specialAttack >= 20){
      this.drawFrame(context,'blue-square',304,34);
    }if(this.player2.specialAttack >= 30){
      this.drawFrame(context,'blue-square',296,34);
    }if(this.player2.specialAttack >= 40){
      this.drawFrame(context,'blue-square',288,34);
    }if(this.player2.specialAttack >= 50){
      this.drawFrame(context,'blue-square',280,34);
    }if(this.player2.specialAttack >= 60){
      this.drawFrame(context,'blue-square',272,34);
    }if(this.player2.specialAttack >= 70){
      this.drawFrame(context,'blue-square',264,34);
    }if(this.player2.specialAttack >= 80){
      this.drawFrame(context,'blue-square',256,34);
    }if(this.player2.specialAttack >= 90){
      this.drawFrame(context,'blue-square',248,34);
    }if(this.player2.specialAttack >= 100){
      this.drawFrame(context,'blue-square',240 ,34);
    }
    
    if(this.player1.name === "Naruto"){
      this.drawFrame(context,'naruto',70,31,-1);
    }
    if(this.player1.name === "Kakashi"){
      this.drawFrame(context,'kakashi2',70,31,-1);
    }
    if(this.player1.name === "Gaara"){
      this.drawFrame(context,'gaara',72,31,-1);
    }
    if(this.player2.name === "Naruto"){
      this.drawFrame(context,'naruto',311 ,31);
    }
    if(this.player2.name === "Kakashi"){
      this.drawFrame(context,'kakashi2',311 ,31);
    }
    if(this.player2.name === "Gaara"){
      this.drawFrame(context,'gaara',309 ,31);
    }
  }

  
  draw(context){
    this.drawIcons(context);
  }

  updatePlayer(player1, player2){
    this.player1 = player1
    this.player2 = player2
  }
}