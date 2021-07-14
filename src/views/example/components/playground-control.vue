<template>
  <d2-button
    v-for="item in options"
    :key="item"
    :color="value === item ? 'indigo' : ''"
    size="small"
    @click="onClick(item)"
  >
    {{ item || 'default' }}
  </d2-button>
</template>

<script>
export default {
  props: {
    options: { type: Array, default: () => [] },
    value: { type: [String, Boolean], default: '' }
  },
  emits: [
    'update:value'
  ],
  setup (props, { emit }) {
    function onClick (item) {
      emit('update:value', item)
    }
    return {
      onClick
    }
  }
}
</script>
