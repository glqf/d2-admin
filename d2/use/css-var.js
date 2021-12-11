import { ref, onMounted } from 'vue'
import { getCssVar } from 'd2/utils/css.js'

export function useCssVar (name = '', defaultValue) {
  const cssVarValue = ref(defaultValue)

  onMounted(() => {
    cssVarValue.value = getCssVar(name)
  })

  return cssVarValue
}
