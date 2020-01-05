import fs from 'fs'
import path from 'path'
import robot from 'robotjs'
import ioHook from 'iohook'

import { arrayOfKeycCodesToHotkeyStr } from './keys'
import { CommandObject, ConfigObject } from '../types'

export * from './keys'

/**
 * Load all scripts in the `scripts` directory
 */
export const loadScripts = async () => {
  const scriptsList = await fs.promises.readdir(path.resolve(__dirname, '..', 'scripts'))
  let loadedScripts: { [key: string]: CommandObject } = {}
  for (const aScript of scriptsList)
    loadedScripts[aScript.replace('.ts', '')] = (await import(path.resolve(__dirname, '..', 'scripts', aScript))).default
  return loadedScripts
}

/**
 * Print the configuration file in a human-readable format
 * @param config Hotkeys configuration object
 */
export const showConfig = (config: ConfigObject) => Object.keys(config).map(aScript => {
  const hotkeysStr = config[aScript].hotkeys
    .map(anHotkey => arrayOfKeycCodesToHotkeyStr(anHotkey))
    .join(' or ')
  return `${aScript} - ${hotkeysStr}`
}).join('\n')

/**
 * Register all hotkeys in ioHook and start the ioHook handler
 * @param scripts Loaded scripts modules
 * @param config Hotkeys configuration object
 */
export const registerHotkeys = (scripts: { [key: string]: CommandObject }, config: ConfigObject) => {
  for (const aScript in config)
    for (const anHotkey of config[aScript].hotkeys)
      ioHook.registerShortcut(anHotkey, (keys: string[]) => {
        console.log(`${new Date().toLocaleString()} - ${arrayOfKeycCodesToHotkeyStr(keys)} - Running script ${aScript}.`)
        scripts[aScript].run()
      })

  ioHook.start(true)
}


/**
 * Smoothly move the mouse and click
 * @param x X
 * @param y Y
 * @param speed Smooth mouse move speed (1 = fastest, more = faster)
 * @param clickType Click type
 */
export const moveSmoothClick = (x: number, y: number, speed: number = 1, clickType: 'left' | 'middle' | 'right' = 'left') => {
  robot.moveMouseSmooth(x, y, speed)
  robot.mouseClick(clickType)
}

/**
 * Wait some time
 * @param ms Ms to wait
 */
export const pause = (ms: number): Promise<void> => new Promise(res => setTimeout(res, ms))
