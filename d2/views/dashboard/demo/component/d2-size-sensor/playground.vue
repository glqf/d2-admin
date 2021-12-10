<route>
{
  "meta": {
    "d2admin.menu.title": "试验"
  }
}
</route>

<template>
  <a-row :gutter="20">
    <a-col :span="12">
      <a-slider v-model:value="height" :min="30" :max="300"/>
      <p v-for="item in history" :key="item.id" class="mb-2">
        {{ item.text }}
      </p>
    </a-col>
    <a-col :span="12">
      <d2-size-sensor @resize="onResize">
        <div :style="style" class="border border-indigo-500 rounded"/>
      </d2-size-sensor>
    </a-col>
  </a-row>
</template>

<script>
import { computed, ref } from 'vue'
import { px } from 'd2/utils/css.js'
import { id } from 'd2/utils/id.js'

export default {
  setup () {
    const height = ref(50)

    const style = computed(() => ({
      height: px(height)
    }))

    const history = ref([])

    function onResize ({ height }) {
      history.value.unshift({
        id: id(),
        text: `[size change] height: ${height}px`
      })
    }

    return {
      height,
      style,
      history,
      onResize
    }
  }  
}
</script>
