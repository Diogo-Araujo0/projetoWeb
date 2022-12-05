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
  IDLE:[-16, -55, 20, 50],
  JUMP:[-16, -91, 32, 66],
  BEND:[-16, -58, 32, 58],
  CROUCH:[-16, -50, 32, 50],
}