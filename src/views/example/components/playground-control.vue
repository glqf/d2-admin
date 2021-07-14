<template>
  <p class="playground-control__title">
    {{ label }}
  </p>
  <section class="playground-control__body">
    <d2-button
      v-for="item in options"
      :key="item"
      :color="value === item ? 'indigo' : ''"
      size="small"
      @click="onClick(item)"
    >
      {{ item || 'default' }}
    </d2-button>
  </section>
</template>

<script>
export default {
  props: {
    label: { type: String, default: '' },
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

<style lang="scss" scoped>
.playground-control__title {
  @apply mb-2 text-gray-500;
}
.playground-control__body {
  @apply mb-2;
}
</style>
