import { Naruto } from "./entities/fighters/Naruto.js";
import { Kakashi } from "./entities/fighters/Kakashi.js";
import { Background } from "./entities/Background.js";
import { FpsCounter } from "./entities/FpsCounter.js";
import { BACKGROUND_FLOOR } from "./constants/background.js";
import { FighterDirection } from "./constants/fighter.js";
import { registerKeyboardEvents } from "./InputHandler.js";
import { StatusBar } from './entities/overlays/StatusBar.js'

export class ImmortalFight{

  constructor(){
    this.context = this.getContext();

    this.fighters = [
      new Naruto(104, BACKGROUND_FLOOR, FighterDirection.RIGHT,0),
      new Kakashi(280, BACKGROUND_FLOOR, FighterDirection.LEFT,1),
    ];
  
    this.fighters[0].opponent = this.fighters[1];
    this.fighters[1].opponent = this.fighters[0];
    this.entities = [
      new Background(3),
      ...this.fighters,
      new FpsCounter(),
      new StatusBar(this.fighters),
    ];
  
    this.frameTime = {
      previous: 0,
      secondsPassed: 0,
    };
  }

  getContext(){
    const canvasEl = document.querySelector("canvas");
    const context = canvasEl.getContext("2d");

    context.imageSmoothingEnabled = false;
    return context;
  }

  update(){
    for (const entity of this.entities) {
      entity.update(this.frameTime, this.context);
    }
  }

  draw(){
    for (const entity of this.entities) {
      entity.draw(this.context);
    }
  }

  frame(time) {
    window.requestAnimationFrame(this.frame.bind(this));
    this.frameTime = {
      secondsPassed: (time - this.frameTime.previous) / 1000,
      previous: time,
    };
    this.update();
    this.draw();
  }

  start(){
    registerKeyboardEvents();
    window.requestAnimationFrame(this.frame.bind(this));
  }
}