import { $ } from 'd2-projects/d2-utils/vue.js'

export function countStore () {
  const count = $(0)

  function countIncrease () {
    $(count, $(count) + 1)
  }

  return {
    count,
    countIncrease
  }
}
