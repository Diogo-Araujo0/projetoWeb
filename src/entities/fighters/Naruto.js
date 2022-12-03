import { Fighter } from "./Fighter.js";
import { FighterState } from "../../constants/fighter.js"

export class Naruto extends Fighter {
  constructor(x, y, velocity) {
    super("Naruto", x, y, velocity);

    this.image = document.querySelector('img[alt="naruto"]');

    this.frames = new Map([
      //idle

      ["idle-1", [[25, 346, 43, 58],[21, 58]]], 
      ["idle-2", [[82, 348, 43, 56],[21, 56]]],
      ["idle-3", [[140, 349, 43, 55],[21, 55]]],
      ["idle-4", [[196, 349, 43, 55],[21, 55]]],
      ["idle-5", [[251, 348, 43, 56],[21, 56]]],
      ["idle-6", [[309, 347, 43, 57],[21, 57]]],


      // Forward

      ["forwards-1", [[386, 469, 44, 48],[21, 48]]],
      ["forwards-2", [[442, 468, 58, 43],[29, 43]]],
      ["forwards-3", [[517, 467, 50, 48],[25, 48]]],
      ["forwards-4", [[581, 469, 41, 46],[20, 46]]],
      ["forwards-5", [[633, 466, 55, 45],[27, 45]]],
      ["forwards-6", [[703, 468, 52, 49],[26, 48]]],

      // Backward

      ["backwards-1", [[757, 351, 44, 48],[21, 48]]],
      ["backwards-2", [[687, 350, 58, 43],[29, 43]]],
      ["backwards-3", [[620, 349, 50, 48],[25, 48]]],
      ["backwards-4", [[565, 351, 41, 46],[20, 46]]],
      ["backwards-5", [[499, 348, 55, 45],[27, 45]]],
      ["backwards-6", [[432, 350, 52, 49],[26, 48]]],

      //Jump Up

      ["jump-up-1", [[24, 689, 34, 63], [17, 63]]],
      ["jump-up-2", [[83, 689, 34, 63], [17, 63]]],
      ["jump-up-3", [[140, 688, 49, 64],[24, 64]]],
      ["jump-up-4", [[203, 689, 49, 63],[24, 64]]],
      ["jump-up-5", [[277, 720, 31, 43],[16, 43]]],


      //crouch

      ["crouch-1", [[27, 577, 36, 51],[18, 51]]],
      ["crouch-2", [[79, 588, 31, 43],[16, 43]]],
      ["crouch-3", [[126, 588, 31, 43],[15, 43]]],

    ]);
      
      
      
    this.animations = {
      [FighterState.IDLE]: [['idle-1', 68],['idle-2',68], ['idle-3',68], ['idle-4',68], ['idle-5',68], ['idle-6',68]],
      [FighterState.WALK_FORWARD]: [['forwards-1', 68],['forwards-2',68], ['forwards-3',68], ['forwards-4',68], ['forwards-5',68], ['forwards-6',68]],
      [FighterState.WALK_BACKWARD]: [['backwards-1', 68],['backwards-2',68], ['backwards-3',68], ['backwards-4',68], ['backwards-5',68], ['backwards-6',68]],
      [FighterState.JUMP_UP]: [['jump-up-1', 180],['jump-up-2',180], ['jump-up-3',130], ['jump-up-4',100],['jump-up-5',-1]],
      [FighterState.CROUCH]: [['crouch-3',0]],
      [FighterState.CROUCH_DOWN]: [['crouch-1',30],['crouch-2',30],['crouch-3',30],['crouch-3',-2]],
      [FighterState.CROUCH_UP]: [['crouch-3',30],['crouch-2',30],['crouch-1',30],['crouch-1',-2]],

    };

    this.initialVelocity = {
      x:{
        [FighterState.WALK_FORWARD]: 200,
        [FighterState.WALK_BACKWARD]: -150,
      }, 
      jump: -420,
    };

    this.gravity = 1000;
    
  }
}
