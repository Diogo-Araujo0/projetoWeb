import { Naruto } from "./entities/fighters/Naruto.js"
import { Kakashi } from "./entities/fighters/Kakashi.js"
import { Background } from "./entities/Background.js"
import { FpsCounter } from "./entities/FpsCounter.js"
import { BACKGROUND_FLOOR } from "./constants/background.js"
import { FighterDirection } from "./constants/fighter.js"
import { registerKeyboardEvents, disableKeys } from "./InputHandler.js"
import { StatusBar } from './entities/overlays/StatusBar.js'
import { Icons } from './entities/overlays/Icons.js'
import { GAME_RESULT } from './constants/game.js'
import { Sounds } from "./entities/Sounds.js"

const paises = [
  "Spain",
  "USA",
  "Japan",
  "France",
  "Germany",
  "Russia",
  "Brazil",
  "Iran",
  "China",
  "Peru",
  "India",
  "Netherlands"
]

export class ImmortalFight{
  constructor(){
    this.audio = new Audio("./audio/background.ogg");
    this.context = this.getContext()
    this.isOver = false
    this.fighters = [
      new Naruto(104, BACKGROUND_FLOOR, FighterDirection.RIGHT,0),
      new Kakashi(280, BACKGROUND_FLOOR, FighterDirection.LEFT,1),
    ]

    this.fighters[0].opponent = this.fighters[1]
    this.fighters[1].opponent = this.fighters[0]
    
    this.entities = [
      new Background(Math.floor(Math.random() * 6) + 1),
      ...this.fighters,
      new FpsCounter(),
      new StatusBar(),
      new Icons(this.fighters),
      new Sounds(),
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
    this.entities[6].updatePlayer(this.entities[5].fighters[0], this.entities[5].fighters[1])
    this.gameResultCheck()
    this.audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
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
    
    this.audio.volume = 0.1;
    //this.audio.play()
  }
}


const getWeather = async function() {
  const num = Math.floor(Math.random() * paises.length);
  await fetch(`https://covid-19.dataflowkit.com/v1/${paises[num]}`).then((response) =>{
    var data = response.json()
    data.then((dados) =>{
      return dados
    })
  }).catch((error) => {
    console.log(error)
  })
}