const audio = new Audio("../../audio/background.ogg");
audio.volume = 0.2;

document.body.addEventListener("keydown",function(){
  audio.play()
})

export class Background {
  constructor(backgroundNumber) {
    this.id = backgroundNumber
    this.animationFrame = 1
    this.animationTimer = 0
    this.image = document.querySelector('img[alt="background"]')

    if (this.id === 1){
      this.animations = {
          length: 8,
          delay: 120
      }
    } else if (this.id === 2){
      this.animations = {
          length: 24,
          delay: 120
      }
    } else if (this.id === 3){
      this.animations = {
        length: 8,
        delay: 150
    }
    } else if (this.id === 4){
      this.animations = {
          length: 40,
          delay: 110,
      }
    } else if (this.id === 5){
      this.animations = {
          length: 8,
          delay: 80,
      }
    } else if (this.id === 6){
      this.animations = {
        length: 38,
        delay: 80,
      }
    }
  }
  
  update(time) {
    const animation = this.animations
    const frameDelay = animation.delay
    if (time.previous > this.animationTimer + frameDelay) {
      this.animationTimer = time.previous
      if(frameDelay > 0){
       this.animationFrame++
      }
      if (this.animationFrame > animation.length){ 
        this.animationFrame = 1
      }
    }
    this.image.src = `./imagens/background${this.id}/background(${this.animationFrame}).png`

    audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
  }

  draw(context) {
    context.drawImage(this.image, 0, 0)
  }
}
