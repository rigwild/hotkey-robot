import robot from 'robotjs'

import { moveSmoothClick, pause } from '../utils'
import { CommandObject } from '../types'

const command: CommandObject = {
  async run() {
    const currentMousePos = robot.getMousePos()
    console.log(currentMousePos)

    robot.moveMouse(currentMousePos.x - 50, currentMousePos.y - 50)
    moveSmoothClick(currentMousePos.x - 50, currentMousePos.y + 50, 10)
    moveSmoothClick(currentMousePos.x + 50, currentMousePos.y + 50, 10)
    moveSmoothClick(currentMousePos.x + 50, currentMousePos.y - 50, 10)
    moveSmoothClick(currentMousePos.x - 50, currentMousePos.y - 50, 10)

    await pause(500)
    robot.moveMouse(currentMousePos.x, currentMousePos.y)
    await pause(500)


    robot.moveMouse(currentMousePos.x - 50, currentMousePos.y + 50)
    moveSmoothClick(currentMousePos.x - 50, currentMousePos.y - 50, 10)
    moveSmoothClick(currentMousePos.x + 50, currentMousePos.y - 50, 10)
    moveSmoothClick(currentMousePos.x + 50, currentMousePos.y + 50, 10)
    moveSmoothClick(currentMousePos.x - 50, currentMousePos.y + 50, 10)

    await pause(500)
    robot.moveMouse(currentMousePos.x, currentMousePos.y)
  }
}

export default command
