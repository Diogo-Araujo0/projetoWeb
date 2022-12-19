import { Fighter } from "./Fighter.js"
import { AttackType, FighterState, PushBox, FighterHP } from "../../constants/fighter.js"

export class Gaara extends Fighter {
  constructor(x, y, direction, playerId) {
    super("Gaara", x, y, direction, playerId)

    this.image = document.querySelector('img[alt="gaara"]')
    this.hp = FighterHP
    this.specialAttack = 0

    this.frames = new Map([
      //idle  
      ["idle-1", [[[19, 74, 35, 62],[17, 62]], PushBox.IDLE]], 
      ["idle-2", [[[73, 74, 33, 62],[16, 62]], PushBox.IDLE]],
      ["idle-3", [[[125, 74, 32, 62],[16, 62]], PushBox.IDLE]],
      ["idle-4", [[[174, 74, 32, 62],[16, 62]], PushBox.IDLE]],
      ["idle-5", [[[224, 74, 32, 62],[16, 62]], PushBox.IDLE]],
      ["idle-6", [[[274, 74, 33, 62],[16, 62]], PushBox.IDLE]],


      // Forward

      ["forwards-1", [[[380, 182, 44, 53],[22, 53]], PushBox.IDLE]],
      ["forwards-2", [[[448, 181, 40, 54],[20, 54]], PushBox.IDLE]],
      ["forwards-3", [[[510, 180, 43, 55],[21, 55]], PushBox.IDLE]],
      ["forwards-4", [[[583, 184, 41, 51],[20, 51]], PushBox.IDLE]],
      ["forwards-5", [[[648, 184, 41, 51],[20, 51]], PushBox.IDLE]],
      ["forwards-6", [[[716, 182, 46, 53],[23, 53]], PushBox.IDLE]],


      // Backward

      ["backwards-1", [[[1274, 53, 44, 53],[22, 53]], PushBox.IDLE]],
      ["backwards-2", [[[1210, 52, 40, 54],[20,54]], PushBox.IDLE]],
      ["backwards-3", [[[1145, 51, 43, 55],[21, 55]], PushBox.IDLE]],
      ["backwards-4", [[[1074, 55, 41, 51],[20, 51]], PushBox.IDLE]],
      ["backwards-5", [[[1009, 55, 41, 51],[20, 51]], PushBox.IDLE]],
      ["backwards-6", [[[936, 53, 46, 53],[23, 53]], PushBox.IDLE]],


      //Jump Up

      ["jump-up-1", [[[29, 280, 34, 63], [27, 63]], PushBox.JUMP]],
      ["jump-up-2", [[[81, 280, 36, 63], [28, 63]], PushBox.JUMP]],
      ["jump-up-3", [[[132, 287, 47, 56], [23, 56]], PushBox.JUMP]],
      ["jump-up-4", [[[192, 287, 43, 56], [21, 56]], PushBox.JUMP]],



      //crouch

      ["crouch-1", [[[24, 388, 36, 56],[18, 56]], PushBox.CROUCH]],
      ["crouch-2", [[[76, 396, 37, 48],[18, 48]], PushBox.CROUCH]],
      ["crouch-3", [[[133, 400, 33, 44],[16, 44]], PushBox.CROUCH]],


      //death
      ["death-1", [[[1135, 92, 53, 43],[26, 43]], PushBox.IDLE]],
      ["death-2", [[[1198, 198, 62, 37],[31, 37]], PushBox.IDLE]],

     //win

     ["win-1", [[[50, 2115, 36, 62],[18, 62]], PushBox.IDLE]],
     ["win-2", [[[112, 2115, 36, 62],[18, 62]], PushBox.IDLE]],
     ["win-3", [[[166, 2115, 42, 62],[21, 62]], PushBox.IDLE]],
     ["win-4", [[[234, 2115, 33, 62],[16, 62]], PushBox.IDLE]],


      //normal attack

      ["normalAttack-1", [[[205, 507, 38, 59],[19, 59]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-2", [[[260, 507, 35, 59],[17, 59]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-3", [[[312, 510, 48, 56],[24, 56]], PushBox.IDLE, AttackType.PUNCH]],
      ["normalAttack-4", [[[378, 511, 58, 55],[29, 55]], PushBox.IDLE, AttackType.PUNCH]],


      //special attack

      ["specialAttack-1", [[[512, 505, 37, 61],[18, 61]], PushBox.IDLE, AttackType.KICK]],
      ["specialAttack-2", [[[567, 481, 57, 85],[27, 85]], PushBox.IDLE, AttackType.KICK]],
      ["specialAttack-3", [[[638, 489, 59, 78],[28, 78]], PushBox.IDLE, AttackType.KICK]],
      ["specialAttack-4", [[[709, 498, 93, 68],[46, 68]], PushBox.IDLE, AttackType.KICK]],
      ["specialAttack-5", [[[813, 504, 103, 62],[51, 62]], PushBox.IDLE, AttackType.KICK]],


      //damage

      ["damage-1", [[[953, 178 , 46, 57],[23, 57]], PushBox.IDLE]],
      ["damage-2", [[[1008, 177, 46, 58],[23, 58]], PushBox.IDLE]],


    ])
      
    this.animations = {
      [FighterState.IDLE]: [['idle-1', 155],['idle-2',155], ['idle-3',155], ['idle-4',155], ['idle-5',155], ['idle-6',155]],
      [FighterState.WALK_FORWARD]: [['forwards-1', 68],['forwards-2',68],['forwards-3',68], ['forwards-4',68], ['forwards-5',68], ['forwards-6',68]],
      [FighterState.WALK_BACKWARD]: [['backwards-1', 68],['backwards-2',68], ['backwards-3',68], ['backwards-4',68],['backwards-5',68], ['backwards-6',68]],
      [FighterState.JUMP_UP]: [['jump-up-1', 80],['jump-up-2',80],['jump-up-3',80],['jump-up-4',80],['jump-up-4',-1]],
      [FighterState.JUMP_FORWARD]: [['jump-up-1', 180],['jump-up-2',180], ['jump-up-3',130], ['jump-up-4',100],['jump-up-4',0]],
      [FighterState.JUMP_BACKWARD]: [,['jump-up-4',180], ['jump-up-3',130], ['jump-up-2',100],['jump-up-1',0]],
      [FighterState.CROUCH]: [['crouch-3',0]],
      [FighterState.CROUCH_DOWN]: [['crouch-1',30],['crouch-2',30],['crouch-3',30],['crouch-3',-2]],
      [FighterState.CROUCH_UP]: [['crouch-3',30],['crouch-2',30],['crouch-1',30],['crouch-1',-2]],
      [FighterState.WIN]: [['win-1', 150],['win-2',150], ['win-3',150],['win-4',150]],
      [FighterState.DEATH]: [['death-1', 180],['death-2',0]],
      [FighterState.ATTACK]: [['normalAttack-1', 150],['normalAttack-2',150], ['normalAttack-3', 150], ['normalAttack-4', -2]],
      [FighterState.ATTACK_SPECIAL]: [['specialAttack-1', 150],['specialAttack-2',150], ['specialAttack-3', 150], ['specialAttack-4', 150],['specialAttack-5', -2]],
      [FighterState.DAMAGE]: [['damage-1', 150],['damage-2',150],['damage-2',-2]],



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
