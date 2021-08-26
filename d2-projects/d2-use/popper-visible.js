import { $ } from 'd2-projects/d2-utils/vue.js'

export function usePopperVisible (props) {
  const visibleState = $(!!props.visible)

  return {
    visibleState
  }
}
