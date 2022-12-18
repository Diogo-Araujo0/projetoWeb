import { Fighter } from "./Fighter.js"
import { AttackType, FighterState, PushBox, FighterHP } from "../../constants/fighter.js"

export class Naruto extends Fighter {
  constructor(x, y, direction, playerId) {
    super("Ryu", x, y, direction, playerId)

    this.image = document.querySelector('img[alt="ryu"]')
    this.hp = FighterHP

    this.frames = new Map([
      //idle  
      

      ["idle-1", [[[6, 17, 36, 80],[18, 80]], PushBox.IDLE]], 
      ["idle-2", [[[54, 18, 36, 79],[18, 79]], PushBox.IDLE]],
      ["idle-3", [[[102, 19, 37, 78],[18, 78]], PushBox.IDLE]],
      ["idle-4", [[[152, 18, 36, 79],[18, 79]], PushBox.IDLE]],
   


      // Forward

      ["forwards-1", [[[227, 24, 30, 73],[15, 73]], PushBox.IDLE]],
      ["forwards-2", [[[274, 79, 32, 79],[16, 79]], PushBox.IDLE]],
      ["forwards-3", [[[323, 19, 33, 78],[15, 78]], PushBox.IDLE]],
      ["forwards-4", [[[370, 18, 38, 79],[24, 79]], PushBox.IDLE]],
      ["forwards-5", [[[414, 19, 38, 78],[18, 78]], PushBox.IDLE]],

      // Backward

      ["backwards-1", [[[861, 369, 30, 73],[15, 73]], PushBox.IDLE]],
      ["backwards-2", [[[802, 364, 32, 79],[16, 79]], PushBox.IDLE]],
      ["backwards-3", [[[752, 364, 33, 78],[15, 78]], PushBox.IDLE]],
      ["backwards-4", [[[813, 481, 38, 79],[19, 79]], PushBox.IDLE]],
      ["backwards-5", [[[769, 482, 38, 78],[19, 78]], PushBox.IDLE]],

      //Jump Up

      ["jump-up-1", [[[17, 596, 33, 90], [16, 90]], PushBox.JUMP]],
      ["jump-up-2", [[[69, 604, 31, 68], [15, 68]], PushBox.JUMP]],

      //crouch

      ["crouch-1", [[[329, 407, 40, 53],[20, 53]], PushBox.CROUCH]],

      //death
      ["death-1", [[[190, 1302, 71, 48],[35, 48]], PushBox.IDLE]],
      ["death-2", [[[269, 1331, 74, 27],[37, 27]], PushBox.IDLE]],

     //win

     ["win-1", [[[744, 1286, 30, 73],[15, 73]], PushBox.IDLE]],
     ["win-2", [[[790, 1272, 34, 87],[17, 87]], PushBox.IDLE]],
     ["win-3", [[[839, 1260, 33, 99],[16, 99]], PushBox.IDLE]],

      //normal attack

      ["normalAttack-1", [[[4, 381, 36, 79],[18, 79]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-2", [[[53, 378, 55, 82],[37, 82]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-3", [[[111, 378, 69, 82],[34, 82]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-4", [[[184, 392, 57, 68],[27, 68]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-5", [[[248, 389, 38, 71],[19, 71]], PushBox.IDLE, AttackType.PUNCH]],


      //special attack

      ["specialAttack-1", [[[471, 743, 50, 73],[25, 73]], PushBox.IDLE, AttackType.PUNCH]],
      ["specialAttack-2", [[[545, 744, 51, 72],[25, 72]], PushBox.IDLE, AttackType.PUNCH]],
      ["specialAttack-3", [[[619, 749, 75, 67],[75, 67]], PushBox.IDLE, AttackType.PUNCH]],
      


      //damage

      ["damage-1", [[[234, 1125 , 39, 77],[19, 77]], PushBox.IDLE]],
      ["damage-2", [[[282, 1125, 42, 77],[21, 77]], PushBox.IDLE]],
      ["damage-3", [[[334, 1121, 48, 81],[24, 81]], PushBox.IDLE]],


    ])
      
    this.animations = {
      [FighterState.IDLE]: [['idle-1', 85],['idle-2',85], ['idle-3',85], ['idle-4',85]],
      [FighterState.WALK_FORWARD]: [['forwards-1', 68],['forwards-2',68], ['forwards-3',68], ['forwards-4',68], ['forwards-5',68]],
      [FighterState.WALK_BACKWARD]: [['backwards-1', 68],['backwards-2',68], ['backwards-3',68], ['backwards-4',68], ['backwards-5',68]],
      [FighterState.JUMP_UP]: [['jump-up-1', 180],['jump-up-2',180],['jump-up-2',-1]],
      [FighterState.JUMP_FORWARD]: [['jump-up-1', 180],['jump-up-2',180], ['jump-up-3',130], ['jump-up-4',100],['jump-up-5',0]],
      [FighterState.JUMP_BACKWARD]: [['jump-up-5', 180],['jump-up-4',180], ['jump-up-3',130], ['jump-up-2',100],['jump-up-1',0]],
      [FighterState.CROUCH]: [['crouch-1',0]],
      [FighterState.CROUCH_DOWN]: [['crouch-1',30],['crouch-1',-2]],
      [FighterState.CROUCH_UP]: [['crouch-1',30],['crouch-1',-2]],
      [FighterState.WIN]: [['win-1', 110],['win-2',120], ['win-3',130]],
      [FighterState.DEATH]: [['death-1', 180],['death-2',0]],
      [FighterState.ATTACK]: [['normalAttack-1', 150],['normalAttack-2',150], ['normalAttack-3', 150], ['normalAttack-4', 150],['normalAttack-5', -2]],
      [FighterState.ATTACK_SPECIAL]: [['specialAttack-1', 150],['specialAttack-2',150], ['specialAttack-3', 150], ['specialAttack-4', 150],['specialAttack-5', -2]],
      [FighterState.DAMAGE]: [['damage-1', 150],['damage-2',150],['damage-3',150]['damage-3',-2]],



    }

    this.initialVelocity = {
      x:{
        [FighterState.WALK_FORWARD]: 200,
        [FighterState.WALK_BACKWARD]: -150,
        [FighterState.JUMP_FORWARD]: 170,
        [FighterState.JUMP_BACKWARD]: -200,
      }, 
      jump: -420,
    }

    this.gravity = 1000
    
    

  }
}
