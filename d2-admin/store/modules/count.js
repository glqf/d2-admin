import { $ } from 'v-dollar'

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
