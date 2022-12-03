import { BACKGROUND_FLOOR } from "../../constants/background.js";
import { FighterState } from "../../constants/fighter.js";

export class Fighter {
  constructor(name, x, y, direction) {
    this.name = name;   
    this.position = { x, y };
    this.velocity = { x:0, y:0 };
    this.initialVelocity = {};
    this.direction = direction;
    this.gravity = 0;

    this.frames = new Map();
    this.animationFrame = 0;
    this.animationTimer = 0;
    this.animations = {};

    this.image = new Image();
    this.states={
      [FighterState.IDLE]:{
        init: this.handleIdleInit.bind(this),
        update:  () => { },
        validForm: [
          undefined,
          FighterState.IDLE, FighterState.WALK_FORWARD, FighterState.WALK_BACKWARD,
          FighterState.JUMP_UP,
          FighterState.CROUCH_UP,
        ],
      },
      [FighterState.WALK_FORWARD]:{
        init: this.handleMoveInit.bind(this),
        update: () => { },
        validForm: [
          FighterState.IDLE,FighterState.WALK_BACKWARD,
        ],
      },
      [FighterState.WALK_BACKWARD]:{
        init: this.handleMoveInit.bind(this),
        update: () => { },
        validForm: [
          FighterState.IDLE,FighterState.WALK_FORWARD,
        ],
      },
      [FighterState.JUMP_UP]:{
        init: this.handleJumpUpInit.bind(this),
        update: this.handleJumpUpState.bind(this),
        validForm: [
          FighterState.IDLE,
        ],
      },
      [FighterState.CROUCH]:{
        init: () => { },
        update: () => { },
        validForm: [
          FighterState.CROUCH_DOWN,
        ],
      },
      [FighterState.CROUCH_DOWN]:{
        init: () => { },
        update: this.handleCrouchDownState.bind(this),
        validForm: [
          FighterState.IDLE, FighterState.WALK_FORWARD, FighterState.WALK_BACKWARD,
        ],
      },
      [FighterState.CROUCH_UP]:{
        init: () => { },
        update: this.handleCrouchUpState.bind(this),
        validForm: [
          FighterState.CROUCH,
        ]
      },
    }

    this.changeState(FighterState.IDLE);  

  }

  changeState(newState) {
    if ( newState == this.currentState || !this.states[newState].validForm.includes(this.currentState)) return; 

    this.currentState = newState;
    this.animationFrame = 0;
    this.states[this.currentState].init();
  } 

  handleIdleInit(){
    this.velocity.x = 0;
    this.velocity.y = 0;
  }


  handleMoveInit(){
    this.velocity.x = this.initialVelocity.x[this.currentState] ?? 0;
  }



  handleJumpUpInit(){
    this.velocity.y = this.initialVelocity.jump;
    
  }

  handleCrouchDownState(){
    if(this.animations[this.currentState][this.animationFrame][1] == -2){
      this.changeState(FighterState.CROUCH);
    }
  }

  handleCrouchUpState(){
    if(this.animations[this.currentState][this.animationFrame][1] == -2){
      this.changeState(FighterState.IDLE);
    }
  }

  handleJumpUpState(time){
    this.velocity.y += this.gravity * time.secondsPassed;

    if(this.position.y > BACKGROUND_FLOOR){
      this.position.y = BACKGROUND_FLOOR;
      this.changeState(FighterState.IDLE);
    }
  }

  updateStageContraints(context){
    const WIDTH = 32;
    if (this.position.x > context.canvas.width - WIDTH) {

      this.position.x = context.canvas.width - WIDTH;

    }

    if(this.position.x < WIDTH){

      this.position.x = WIDTH;

    }
  }

  updateAnimation(time){

    const animation = this.animations[this.currentState];
    const [, frameDelay] = animation[this.animationFrame];

    if (time.previous > this.animationTimer + frameDelay) {
      this.animationTimer = time.previous;
      if(frameDelay > 0){
       this.animationFrame++;
      }
      if (this.animationFrame >= animation.length){ 
        this.animationFrame = 0;
      }
    }
  }
  update(time, context) {

    this.position.x += (this.velocity.x * this.direction) * time.secondsPassed;
    this.position.y += this.velocity.y * time.secondsPassed;
    this.states[this.currentState].update(time,context);
    this.updateAnimation(time);
    this.updateStageContraints(context);
  }

  drawDebug(context) {
    context.lineWidth = 1;
    context.beginPath();
    context.strokeStyle = "white";
    context.moveTo(Math.floor(this.position.x) - 4.5, Math.floor(this.position.y));
    context.lineTo(Math.floor(this.position.x) + 4.5, Math.floor(this.position.y));
    context.moveTo(Math.floor(this.position.x), Math.floor(this.position.y) - 4.5);
    context.lineTo(Math.floor(this.position.x), Math.floor(this.position.y) + 4.5);
    context.stroke();
  }

  draw(context) {
    const [frameKey] = this.animations[this.currentState][this.animationFrame];
    const [
      [x, y, width, height], 
      [originX, originY],
    ] = this.frames.get(frameKey);

    context.scale(this.direction, 1);
    context.drawImage(
      this.image,
      x, y,
      width, height,
      this.position.x * this.direction - originX, this.position.y - originY,
      width, height
    );

    context.setTransform(1, 0, 0, 1, 0, 0);
    this.drawDebug(context);
  }
}
