import { Control, controls } from "./constants/control.js"
import { FighterDirection } from "./constants/fighter.js"

const heldKeys = new Set()

function handleKeyDown(event){
  event.preventDefault()

  heldKeys.add(event.code)
}

function handleKeyUp(event){
  heldKeys.delete(event.code)
}

export function registerKeyboardEvents(){
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
}

function handleDisableKey(event){
  heldKeys.delete(event.code)
}

export function disableKeys(){
  window.addEventListener('keydown', handleDisableKey)
}

export const isKeyDown = (code) => heldKeys.has(code)
export const isKeyUp = (code) => !heldKeys.has(code)

export const isLeft = (id) => isKeyDown(controls[id].keyboard[Control.LEFT])
export const isRight = (id) => isKeyDown(controls[id].keyboard[Control.RIGHT])
export const isUp = (id) => isKeyDown(controls[id].keyboard[Control.UP])
export const isDown = (id) => isKeyDown(controls[id].keyboard[Control.DOWN])
export const isAttacking = (id) => isKeyDown(controls[id].keyboard[Control.ATTACK])
export const isAttackingSpecial = (id) => isKeyDown(controls[id].keyboard[Control.ATTACK_SPECIAL])

export const isForward = (id,direction) => direction == FighterDirection.RIGHT ? isRight(id) : isLeft(id)
export const isBackward = (id,direction) => direction == FighterDirection.LEFT ? isRight(id) :isLeft(id)