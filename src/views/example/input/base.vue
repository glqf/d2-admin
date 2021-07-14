<template>
  <the-section title="input">
    <d2-flex dir="left" box="first">
      <d2-flex main="center" cross="center" class="view">
        <d2-input v-model:value="value" :size="sizeValue"/>
      </d2-flex>
      <div class="control">
        <div class="control__row">
          <p>size</p>
          <d2-button
            v-for="_size in size"
            :key="_size"
            :color="sizeValue === _size ? 'indigo' : ''"
            size="small"
            @click="sizeValue = _size"
          >
            {{ _size || 'default' }}
          </d2-button>
        </div>
      </div>
    </d2-flex>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import { colorNames, sizeNames } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const value = ref('Hello World')

    const sizeValue = ref('')

    return {
      value,
      colorNames,
      size: ['', ...sizeNames],
      sizeValue
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  @apply mr-4;
}
.control {
  .control__row {
    @apply mb-2;
    p {
      @apply mb-2 text-gray-500;
    }
  }
}
</style>
