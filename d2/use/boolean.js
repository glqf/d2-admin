import { ref } from 'vue'

/**
 * Returns the Boolean value of the response and the switching method
 */
export function useBoolean (defaultValue = false) {
  const value = ref(!!defaultValue)

  function toggle () {
    value.value = !value.value
  }

  return {
    value,
    toggle
  }
}
