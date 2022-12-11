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
  IDLE:[-10, -57, 20, 58],
  JUMP:[-10, -57, 20, 58],
  BEND:[-10, -57, 20, 58],  
  CROUCH:[-10, -45, 20, 46],
}