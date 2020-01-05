import robot from 'robotjs'

import { CommandObject } from '../types'

const command: CommandObject = {
  async run() {
    // RobotJS mouse move example
    let twoPI = Math.PI * 2.0
    let screenSize = robot.getScreenSize()
    let height = (screenSize.height / 2) - 10
    let width = screenSize.width

    for (let x = 0; x < width; x++)
      robot.moveMouse(x, height * Math.sin((twoPI * x) / width) + height)
  }
}

export default command
