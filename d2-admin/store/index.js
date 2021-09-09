import { registerModules, getModule } from './utils/index.js'
import { countStore } from './modules/count.js'
import { menuStore } from './modules/menu.js'

export const useStore = getModule

export function creatStore () {
  registerModules(
    countStore,
    menuStore
  )
}
