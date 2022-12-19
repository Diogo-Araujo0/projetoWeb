import { Naruto } from "./entities/fighters/Naruto.js"
import { Kakashi } from "./entities/fighters/Kakashi.js"
import { Sakura } from "./entities/fighters/Sakura.js"
import { Gaara } from "./entities/fighters/Gaara.js"
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
    this.context = this.getContext()
    this.isOver = false
    var random = Math.floor(Math.random() * 6);
    if(random == 0){
      this.fighters = [
        new Naruto(104, BACKGROUND_FLOOR, FighterDirection.RIGHT,0),
        new Gaara(280, BACKGROUND_FLOOR, FighterDirection.LEFT,1),
      ]
    }else if(random == 1){ 
      this.fighters = [
        new Naruto(104, BACKGROUND_FLOOR, FighterDirection.RIGHT,0),
        new Kakashi(280, BACKGROUND_FLOOR, FighterDirection.LEFT,1),
      ]
    }else if(random == 2){ 
      this.fighters = [
        new Kakashi(104, BACKGROUND_FLOOR, FighterDirection.RIGHT,0),
        new Gaara(280, BACKGROUND_FLOOR, FighterDirection.LEFT,1),
      ]
    }else if(random == 3){ 
      this.fighters = [
        new Gaara(104, BACKGROUND_FLOOR, FighterDirection.RIGHT,0),
        new Kakashi(280, BACKGROUND_FLOOR, FighterDirection.LEFT,1),
      ]
    }
    else if(random == 4){ 
      this.fighters = [
        new Gaara(104, BACKGROUND_FLOOR, FighterDirection.RIGHT,0),
        new Naruto(280, BACKGROUND_FLOOR, FighterDirection.LEFT,1),
      ]
    }else if(random == 5){ 
      this.fighters = [
        new Kakashi(104, BACKGROUND_FLOOR, FighterDirection.RIGHT,0),
        new Naruto(280, BACKGROUND_FLOOR, FighterDirection.LEFT,1),
      ]
    }

    

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
    this.entities[4].updatePlayer(this.entities[5].fighters[0], this.entities[5].fighters[1])
    this.entities[5].updatePlayer(this.entities[5].fighters[0], this.entities[5].fighters[1])
    this.entities[6].updatePlayer(this.entities[5].fighters[0], this.entities[5].fighters[1])
    this.gameResultCheck()

    if(typeof this.dadosAPI !== "undefined" && !this.entities[4].hasSpawnedItem){
      var numb1 = this.dadosAPI['Total Cases_text'].charAt(this.dadosAPI['Total Cases_text'].length-1)
      var numb2 = this.dadosAPI['Total Cases_text'].charAt(this.dadosAPI['Total Cases_text'].length-2)
      var numb3 = this.dadosAPI['Total Cases_text'].charAt(this.dadosAPI['Total Cases_text'].length-3)
      var total = parseInt(numb1) * parseInt(numb2) + parseInt(numb3)
      numb1 = this.dadosAPI['Total Cases_text'].charAt(this.dadosAPI['Total Recovered_text'].length-1)
      numb2 = this.dadosAPI['Total Cases_text'].charAt(this.dadosAPI['Total Recovered_text'].length-2)
      numb3 = this.dadosAPI['Total Cases_text'].charAt(this.dadosAPI['Total Recovered_text'].length-3)
      var x = Math.min(350, (parseInt(numb1) * parseInt(numb2) * parseInt(numb3))*2)
      var y = Math.max(90, parseInt(numb1) * parseInt(numb2) * parseInt(numb3))
      if(x <= 10){
        x = 15
      }
      this.entities[4].updateAPIData(Math.round(Math.random() + 1), total, x, y)
    }
    
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
    
    
    this.getWeather()
  }

  getWeather = async function() {
    const num = Math.floor(Math.random() * paises.length);
    await fetch(`https://covid-19.dataflowkit.com/v1/${paises[num]}`).then((response) =>{
      var data = response.json()
      data.then((dados) =>{
        this.dadosAPI = dados
      })
    }).catch((error) => {
      console.log(error)
    })
  }
}


