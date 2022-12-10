export const FighterDirection = {
  LEFT: -1,
  RIGHT: 1,
};
 
export const FighterState = {
  IDLE: 'idle',
  WALK_FORWARD: 'walkForwards',
  WALK_BACKWARD: 'walkBackwards',
  JUMP_UP: 'jumpUp',
  JUMP_FORWARD: 'jumpForward',
  JUMP_BACKWARD: 'jumpBackwards',
  CROUCH: 'crouch',
  CROUCH_DOWN: 'crouchDown',
  CROUCH_UP: 'crouchUp',
}


export const PushBox = {
  IDLE:[-16, -60, 32, 58],
  WALKF:[-20, -60 , 32, 58],
  WALKB:[-10, -60, 35, 58],
  JUMP:[-16, -65, 32, 66],
  BEND:[-16, -58, 32, 58],
  CROUCH:[-16, -45, 32, 44],
}