import { Naruto } from "./entities/fighters/Naruto.js"
import { Kakashi } from "./entities/fighters/Kakashi.js"
import { Background } from "./entities/Background.js"
import { FpsCounter } from "./entities/FpsCounter.js"
import { BACKGROUND_FLOOR } from "./constants/background.js"
import { Sound } from "./constants/audio.js"
import { FighterDirection } from "./constants/fighter.js"
import { registerKeyboardEvents, disableKeys } from "./InputHandler.js"
import { StatusBar } from './entities/overlays/StatusBar.js'
import { Icons } from './entities/overlays/Icons.js'
import { GAME_RESULT } from './constants/game.js'

export class ImmortalFight{
  constructor(){
    this.context = this.getContext()
    this.isOver = false
    this.fighters = [
      new Naruto(104, BACKGROUND_FLOOR, FighterDirection.RIGHT,0),
      new Kakashi(280, BACKGROUND_FLOOR, FighterDirection.LEFT,1),
    ]
  
    this.fighters[0].opponent = this.fighters[1]
    this.fighters[1].opponent = this.fighters[0]
    this.entities = [
      new Background(6),
      ...this.fighters,
      new FpsCounter(),
      new StatusBar(this.fighters),
      new Icons(this.fighters),
    ]
  
    this.frameTime = {
      previous: 0,
      secondsPassed: 0,
    }
  }

  getContext(){
    const canvasEl = document.querySelector("canvas")
    const context = canvasEl.getContext("2d")

    context.imageSmoothingEnabled = false
    return context
  }

  update(){
    for (const entity of this.entities) {
      entity.update(this.frameTime, this.context)
    }
    this.entities[4].updateHealthBar(this.entities[5].fighters[0].hp, this.entities[5].fighters[1].hp)
    this.gameResultCheck()
  }

  gameResultCheck(){
    if(this.entities[4].time === 0 || this.entities[5].fighters[0].hp <= 0 || this.entities[5].fighters[1].hp <= 0){
      disableKeys()
      this.entities[4].freezeClock()
      if(this.entities[5].fighters[0].hp <= 0 && this.entities[5].fighters[1].hp <= 0){
        this.entities[4].changeGameResult(GAME_RESULT.DRAW)
      }
      else if(this.entities[5].fighters[0].hp <= 0){
        this.entities[4].changeGameResult(GAME_RESULT.WIN, this.entities[5].fighters[1].name)
        this.entities[5].fighters[1].handleWinState()
      }
      else if(this.entities[5].fighters[1].hp <= 0){
        this.entities[4].changeGameResult(GAME_RESULT.WIN, this.entities[5].fighters[0].name)
        this.entities[5].fighters[0].handleWinState()
      }else{
        this.entities[4].changeGameResult(GAME_RESULT.DRAW)
      }
    }
  }

  draw(){
    for (const entity of this.entities) {
      entity.draw(this.context)
    }
  }

  frame(time) {
    window.requestAnimationFrame(this.frame.bind(this))
    this.frameTime = {
      secondsPassed: (time - this.frameTime.previous) / 1000,
      previous: time,
    }
    this.update()
    this.draw()
  }

  start(){
    registerKeyboardEvents()
    window.requestAnimationFrame(this.frame.bind(this))
    //getLocation()
  }
}

/*const getLocation = async function() {
  await fetch('https://api.wheretheiss.at/v1/satellites/25544').then((response) =>{
    var data = response.json()
    data.then((dados) =>{
      console.log(dados)
    })
  }).catch((error) => {
    console.log(error)
  })
}*/
