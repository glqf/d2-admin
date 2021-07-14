<template>
  <p class="title">
    {{ label }}
  </p>
  <section class="body">
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
.title {
  @apply mb-2 text-gray-500;
}
.body {
  @apply mb-2;
}
</style>
