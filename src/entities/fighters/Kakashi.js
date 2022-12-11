import { Fighter } from "./Fighter.js";
import { FighterState, PushBox } from "../../constants/fighter.js"

export class Kakashi extends Fighter {
  constructor(x, y, direction, playerId) {
    super("Kakashi", x, y, direction, playerId);

    this.image = document.querySelector('img[alt="kakashi"]');
    this.hp = 100
    this.frames = new Map([

      //Idle

      ["idle-1", [[[24, 356, 41, 65], [20, 64]], PushBox.IDLE]],
      ["idle-2", [[[75, 356, 40, 65], [20, 66]], PushBox.IDLE]],
      ["idle-3", [[[125, 359, 38, 62],[19, 62]], PushBox.IDLE]],
      ["idle-4", [[[170, 361, 38, 60],[19, 60]], PushBox.IDLE]],
      ["idle-5", [[[219, 359, 38, 62],[19, 62]], PushBox.IDLE]],
      ["idle-6", [[[265, 356, 40, 65],[20, 65]], PushBox.IDLE]],

      //Forward

      ["forwards-1", [[[23, 611, 56, 56], [28, 56]], PushBox.IDLE]],
      ["forwards-2", [[[91, 610, 42, 56], [21, 56]], PushBox.IDLE]],
      ["forwards-3", [[[142, 610, 50, 56], [25, 56]], PushBox.IDLE]],
      ["forwards-4", [[[201, 611, 55, 57], [27, 57]], PushBox.IDLE]],
      ["forwards-5", [[[270, 610, 47, 59], [23, 59]], PushBox.IDLE]],
      ["forwards-6", [[[329, 609, 51, 58], [26, 58]], PushBox.IDLE]],
   
      //Backward

      ["backwards-1", [[[805, 610, 51, 57], [25, 57]], PushBox.IDLE]],
      ["backwards-2", [[[748, 610, 47, 59], [24, 59]], PushBox.IDLE]],
      ["backwards-3", [[[684, 611, 55, 57], [27, 57]], PushBox.IDLE]],
      ["backwards-4", [[[622, 610, 50, 56], [25, 56]], PushBox.IDLE]],
      ["backwards-5", [[[569, 610, 42, 56], [21, 56]], PushBox.IDLE]],
      ["backwards-6", [[[503, 611, 56, 56], [28, 56]], PushBox.IDLE]],

      //Jump Up

      ["jump-up-1", [[[24, 850, 34, 67], [16, 67]], PushBox.JUMP]],
      ["jump-up-2", [[[69, 850, 34, 67], [16, 67]], PushBox.JUMP]],
      ["jump-up-3", [[[137, 855, 44, 62],[22, 62]], PushBox.JUMP]],
      ["jump-up-4", [[[190, 855, 44, 62],[22, 62]], PushBox.JUMP]],
      ["jump-up-5", [[[252, 884, 31, 43],[16, 43]], PushBox.JUMP]],

      //crouch

      ["crouch-1", [[[22, 733, 37, 56],[18, 56]], PushBox.IDLE]],
      ["crouch-2", [[[72, 747, 31, 43],[15, 43]], PushBox.CROUCH]],



    ]);

      
    this.animations = {
      [FighterState.IDLE]: [['idle-1', 85],['idle-2',85], ['idle-3',85], ['idle-4',85], ['idle-5',85], ['idle-6',85]],
      [FighterState.WALK_FORWARD]: [['forwards-1', 68],['forwards-2',68], ['forwards-3',68], ['forwards-4',68], ['forwards-5',68], ['forwards-6',68]],
      [FighterState.WALK_BACKWARD]: [['backwards-1', 68],['backwards-2',68], ['backwards-3',68], ['backwards-4',68], ['backwards-5',68], ['backwards-6',68]],
      [FighterState.JUMP_UP]: [['jump-up-1', 180],['jump-up-2',180], ['jump-up-3',130], ['jump-up-4',100],['jump-up-5',-1]],
      [FighterState.JUMP_FORWARD]: [['jump-up-1', 180],['jump-up-2',180], ['jump-up-3',130], ['jump-up-4',100],['jump-up-5',0]],
      [FighterState.JUMP_BACKWARD]: [['jump-up-5', 180],['jump-up-4',180], ['jump-up-3',130], ['jump-up-2',100],['jump-up-1',0]],
      [FighterState.CROUCH]: [['crouch-2',0]],
      [FighterState.CROUCH_DOWN]: [['crouch-1',30],['crouch-2',30],['crouch-2',-2]],
      [FighterState.CROUCH_UP]: [['crouch-2',30],['crouch-1',30],['crouch-1',-2]],

    };

    this.initialVelocity = {
      x:{
        [FighterState.WALK_FORWARD]: 200,
        [FighterState.WALK_BACKWARD]: -150,
        [FighterState.JUMP_FORWARD]: 170,
        [FighterState.JUMP_BACKWARD]: -200,
      }, 
      jump: -420,
    };

    this.gravity = 1000;

  }
}
