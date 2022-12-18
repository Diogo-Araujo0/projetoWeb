export const Control={
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down',
  ATTACK: 'attack',
  ATTACK_SPECIAL: 'attack_special',
}

export const controls = [
  {
    keyboard:{
      [Control.LEFT]: 'KeyA',
      [Control.RIGHT]: 'KeyD',
      [Control.UP]: 'KeyW',
      [Control.DOWN]: 'KeyS',
      [Control.ATTACK]: 'KeyC',
      [Control.ATTACK_SPECIAL]: 'KeyX',
    }
  },
  {
    keyboard:{
      [Control.LEFT]: 'ArrowLeft',
      [Control.RIGHT]: 'ArrowRight',
      [Control.UP]: 'ArrowUp',
      [Control.DOWN]: 'ArrowDown',
      [Control.ATTACK]: 'KeyP',
      [Control.ATTACK_SPECIAL]: 'KeyL',
    }
  },
]