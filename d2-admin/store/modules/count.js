import { ref } from 'vue'

export function countStore () {
  const count = ref(0)

  function countIncrease () {
    count.value ++
  }

  return {
    count,
    countIncrease
  }
}
