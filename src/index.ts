import robot from 'robotjs'

import { loadScripts, showConfig, registerHotkeys } from './utils'
import config from './config'

const start = async () => {
  // Load all scripts in scripts dir
  const scripts = await loadScripts()

  console.log('\nLoaded scripts:', Object.keys(scripts))
  console.log('\nLoaded hotkeys configuration:')
  console.log(showConfig(config), '\n')

  // Make the mouse move faster
  robot.setMouseDelay(1)

  // Register all hotkeys with their scripts
  registerHotkeys(scripts, config)

  console.log('Hotkeys registered! Listening for events...')
}

start()
