export const FighterDirection = {
  LEFT: -1,
  RIGHT: 1,
}
 
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
  WIN: 'win',
  DEATH: 'death',
  ATTACK: 'attack',
  DAMAGE: 'damage',
}

export const PushBox = {
  IDLE:[-10, -57, 20, 58],
  JUMP:[-10, -57, 20, 58],
  BEND:[-10, -57, 20, 58],  
  CROUCH:[-10, -45, 20, 46],
}

export const AttackType = {
  PUNCH: 'punch',
  KICK: 'kick',
}

export const AttackBoxLeft = {
  PUNCH:[-30, -40, 20, 20],
  KICK:[-30, -50, 20, 20],
}

export const AttackBoxRight = {
  PUNCH:[10, -40, 20, 20],
  KICK:[10, -50, 20, 20],
}