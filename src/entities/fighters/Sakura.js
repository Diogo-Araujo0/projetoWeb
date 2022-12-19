import { Fighter } from "./Fighter.js"
import { AttackType, FighterState, PushBox, FighterHP } from "../../constants/fighter.js"

export class Sakura extends Fighter {
  constructor(x, y, direction, playerId) {
    super("Sakura", x, y, direction, playerId)

    this.image = document.querySelector('img[alt="sakura"]')
    this.hp = FighterHP
    this.specialAttack = 0

    this.frames = new Map([
      //idle
      ["idle-1", [[[23 , 343 ,33 , 57],[16, 57]], PushBox.IDLE]], 
      ["idle-2", [[[68, , 344, 33,56],[16, 56]], PushBox.IDLE]],
      ["idle-3", [[[112, 346, 33, 54],[16, 54]], PushBox.IDLE]],
      ["idle-4", [[[159, 348, 32, 52],[16, 52]], PushBox.IDLE]],
      ["idle-5", [[[201, 344, 33, 56],[16, 56]], PushBox.IDLE]],

   


      // Forward

      ["forwards-1", [[[385, 466, 47, 50],[23, 50]], PushBox.IDLE]],
      ["forwards-2", [[[444, 465, 50, 46],[25, 46]], PushBox.IDLE]],
      ["forwards-3", [[[513, 464, 41, 53],[20, 53]], PushBox.IDLE]],
      ["forwards-4", [[[568, 466, 49, 51],[24, 51]], PushBox.IDLE]],
      ["forwards-5", [[[630, 465, 54, 48],[27, 48]], PushBox.IDLE]],7
      ["forwards-6", [[[702, 464, 40, 54],[20, 27]], PushBox.IDLE]],


      // Backward

      ["backwards-1", [[[945, 1531, 47, 50],[23, 50]], PushBox.IDLE]],
      ["backwards-2", [[[883, 1530, 50, 46],[25, 23]], PushBox.IDLE]],
      ["backwards-3", [[[823, 1529, 41, 53],[20, 53]], PushBox.IDLE]],
      ["backwards-4", [[[760, 1531, 49, 51],[19, 79]], PushBox.IDLE]],
      ["backwards-5", [[[693, 1530, 54, 48],[27, 48]], PushBox.IDLE]],
      ["backwards-6", [[[635, 1529, 40, 54],[27, 48]], PushBox.IDLE]],


      //Jump Up

      ["jump-up-1", [[[24, 692, 33, 90], [16, 90]], PushBox.JUMP]],
      ["jump-up-2", [[[72, 692, 32, 67], [16, 67]], PushBox.JUMP]],
      ["jump-up-3", [[[134, 706, 35, 53], [17, 53]], PushBox.JUMP]],
      ["jump-up-4", [[[178, 706, 37, 53], [16, 67]], PushBox.JUMP]],
      ["jump-up-5", [[[241, 723, 31, 42], [15, 21]], PushBox.JUMP]],




      //crouch

      ["crouch-1", [[[23, 573, 32, 54],[16, 54]], PushBox.CROUCH]],
      ["crouch-2", [[[67, 585, 30, 44],[30, 44]], PushBox.CROUCH]],
      ["crouch-3", [[[110, 589, 29, 42],[14, 42]], PushBox.CROUCH]],
      ["crouch-4", [[[152, 589, 30, 42],[15, 21]], PushBox.CROUCH]],
      ["crouch-5", [[[192, 589, 31, 42],[31, 42]], PushBox.CROUCH]],

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
      [FighterState.JUMP_FORWARD]: [['jump-up-1', 180],['jump-up-2',0]],
      [FighterState.JUMP_BACKWARD]: [['jump-up-1', 180],['jump-up-2',0]],
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
