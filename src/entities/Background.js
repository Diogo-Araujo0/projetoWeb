export class Background {
  constructor() {
    this.animationFrame = 1;
    this.animationTimer = 0;
    this.animations = {};

    this.image = document.querySelector('img[alt="background"]');
    
    this.animations = {
        1: ["background(1)", 85],
        2: ["background(2)", 85],
        3: ["background(3)", 85],
        4: ["background(4)", 85],
        5: ["background(5)", 85],
        6: ["background(6)", 85],
        7: ["background(7)", 85],
        8: ["background(8)", 85],
    }
  }
  
  update(time) {
    const animation = this.animations;
    const [, frameDelay] = animation[this.animationFrame];
    if (time.previous > this.animationTimer + frameDelay) {
      this.animationTimer = time.previous;
      if(frameDelay > 0){
       this.animationFrame++;
      }
      if (this.animationFrame >= Object.keys(animation).length){ 
        this.animationFrame = 1;
      }
    }
    console.log(this.animationFrame)
    this.image.src = `./imagens/background1/background(${this.animationFrame}).png`
  }

  draw(context) {
    context.drawImage(this.image, 0, 0);
  }
}
