import { keys } from './utils'
import { ConfigObject } from './types'

const config: ConfigObject = {
  // Run the example script with the hotkey `F8` or `CTRL + F7`
  example: {
    hotkeys: [
      [keys.F8],
      [keys["Ctrl Left"], keys.F7]
    ]
  },
  // Run the example2 script with the hotkey `P`
  example2: {
    hotkeys: [
      [keys.P]
    ]
  }
}

export default config
