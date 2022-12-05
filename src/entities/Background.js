export class Background {
  constructor(backgroundNumber) {
    this.id = backgroundNumber
    this.animationFrame = 1;
    this.animationTimer = 0;
    this.animations = {};

    this.image = document.querySelector('img[alt="background"]');
    if (backgroundNumber = 1){
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
    if (backgroundNumber = 2){
      this.animations = {
          1: ["background(1)",120],
          2: ["background(2)", 120],
          3: ["background(3)", 120],
          4: ["background(4)", 120],
          5: ["background(5)", 120],
          6: ["background(6)", 120],
          7: ["background(7)", 120],
          8: ["background(8)", 120],
          9: ["background(9)", 120],
          10: ["background(10)", 120],
          11: ["background(11)", 120],
          12: ["background(12)", 120],
          13: ["background(13)", 120],
          14: ["background(14)", 120],
          15: ["background(15)", 120],
          16: ["background(16)", 120],
          17: ["background(17)", 120],
          18: ["background(18)", 120],
          19: ["background(19)", 120],
          20: ["background(20)", 120],
          21: ["background(21)", 120],
          22: ["background(22)", 120],
          23: ["background(23)", 120],
          24: ["background(24)", 120],
      }
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
    this.image.src = `./imagens/background${this.id}/background(${this.animationFrame}).png`
  }

  draw(context) {
    context.drawImage(this.image, 0, 0);
  }
}
