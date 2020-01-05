export interface ConfigObject {
  [key: string]: {
    hotkeys: number[][]
  }
}

export interface CommandObject {
  run: () => Promise<void>
}
