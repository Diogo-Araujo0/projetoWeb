import { Fighter } from "./Fighter.js"
import { AttackType, FighterState, PushBox, FighterHP } from "../../constants/fighter.js"

export class Naruto extends Fighter {
  constructor(x, y, direction, playerId) {
    super("Ken", x, y, direction, playerId)

    this.image = document.querySelector('img[alt="ken"]')
    this.hp = FighterHP

    this.frames = new Map([
      //idle  
      

      ["idle-1", [[[5, 4, 35, 79],[17, 79]], PushBox.IDLE]], 
      ["idle-2", [[[53, 3, 36, 80],[18, 80]], PushBox.IDLE]],
      ["idle-3", [[[101, 4, 35, 79],[17, 79]], PushBox.IDLE]],
      ["idle-4", [[[147, 5, 36, 78],[18, 78]], PushBox.IDLE]],
   


      // Forward

      ["forwards-1", [[[37, 78, 37, 78],[18, 78]], PushBox.IDLE]],
      ["forwards-2", [[[56, 87, 37, 80],[18, 80]], PushBox.IDLE]],
      ["forwards-3", [[[105, 89, 32, 78],[16, 78]], PushBox.IDLE]],
      ["forwards-4", [[[152, 89, 31, 79],[15, 79]], PushBox.IDLE]],
      ["forwards-5", [[[201, 94, 30, 73],[15, 73]], PushBox.IDLE]],

      // Backward

      ["backwards-1", [[[8, 176, 31, 79],[15, 79]], PushBox.IDLE]],
      ["backwards-2", [[[57, 181, 30, 73],[15, 73]], PushBox.IDLE]],
      ["backwards-3", [[[104, 174, 37, 80],[18, 80]], PushBox.IDLE]],
      ["backwards-4", [[[148, 176, 37, 78],[18, 78]], PushBox.IDLE]],
      ["backwards-5", [[[200, 181, 31, 73],[15, 73]], PushBox.IDLE]],

      //Jump Up

      ["jump-up-1", [[[9, 532, 30, 73], [15, 73]], PushBox.JUMP]],
      ["jump-up-2", [[[50, 513, 33, 90], [15, 45]], PushBox.JUMP]],
      ["jump-up-3", [[[88, 511, 29, 78], [14, 78]], PushBox.JUMP]],
      ["jump-up-4", [[[122, 509, 31, 67], [15, 67]], PushBox.JUMP]],
      ["jump-up-5", [[[158, 511, 29, 78], [14, 78]], PushBox.JUMP]],~
      ["jump-up-6", [[[192, 513, 33, 90], [16, 90]], PushBox.JUMP]],
      ["jump-up-7", [[[238, 532, 30, 73], [15, 73]], PushBox.JUMP]],


      //crouch

      ["crouch-1", [[[399, 282, 35, 54],[17, 54]], PushBox.CROUCH]],

      //death
      ["death-1", [[[1002, 84, 72, 42],[31, 42]], PushBox.IDLE]],
      ["death-2", [[[1079, 96, 75, 27],[32, 27]], PushBox.IDLE]],

     //win

     ["win-1", [[[744, 1286, 30, 73],[15, 73]], PushBox.IDLE]],
     ["win-2", [[[790, 1272, 34, 87],[17, 87]], PushBox.IDLE]],
     ["win-3", [[[839, 1260, 33, 99],[16, 99]], PushBox.IDLE]],

      //normal attack

      ["normalAttack-1", [[[444, 45, 37, 79],[18, 79]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-2", [[[493, 41, 44, 82],[22, 82]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-3", [[[550, 41, 62, 82],[31, 82]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-4", [[[622, 41, 44, 82],[22, 41]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-5", [[[675, 45, 37, 79],[18, 79]], PushBox.IDLE, AttackType.PUNCH]],


      //special attack

      ["specialAttack-1", [[[179, 264, 33, 80],[16, 80]], PushBox.IDLE, AttackType.PUNCH]],
      ["specialAttack-2", [[[221, 278, 38, 108],[19, 108]], PushBox.IDLE, AttackType.PUNCH]],
      ["specialAttack-3", [[[264, 281, 31, 105],[15, 105]], PushBox.IDLE, AttackType.PUNCH]],
      ["specialAttack-4", [[[300, 285, 28, 101],[15, 105]], PushBox.IDLE, AttackType.PUNCH]],
      ["specialAttack-5", [[[333, 298, 35, 87],[17, 87]], PushBox.IDLE, AttackType.PUNCH]],


      //damage

      ["damage-1", [[[730, 662 , 39, 76],[19, 76]], PushBox.IDLE]],
      ["damage-2", [[[784, 663, 43, 75],[21, 75]], PushBox.IDLE]],
      ["damage-3", [[[842, 657, 50, 81],[25, 81]], PushBox.IDLE]],


    ])
      
    this.animations = {
      [FighterState.IDLE]: [['idle-1', 85],['idle-2',85], ['idle-3',85], ['idle-4',85]],
      [FighterState.WALK_FORWARD]: [['forwards-1', 68],['forwards-2',68], ['forwards-3',68], ['forwards-4',68], ['forwards-5',68]],
      [FighterState.WALK_BACKWARD]: [['backwards-1', 68],['backwards-2',68], ['backwards-3',68], ['backwards-4',68], ['backwards-5',68]],
      [FighterState.JUMP_UP]: [['jump-up-1', 80],['jump-up-2',80],['jump-up-3',80]['jump-up-4',80]['jump-up-5',80]['jump-up-6',80]['jump-up-7',80]['jump-up-7',-1]],
      [FighterState.JUMP_FORWARD]: [['jump-up-1', 180],['jump-up-2',180], ['jump-up-3',130], ['jump-up-4',100],['jump-up-5',100],['jump-up-6',100],['jump-up-7',0]],
      [FighterState.JUMP_BACKWARD]: [['jump-up-7', 180],['jump-up-6', 180],['jump-up-5', 180],['jump-up-4',180], ['jump-up-3',130], ['jump-up-2',100],['jump-up-1',0]],
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
