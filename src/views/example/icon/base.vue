<template>
  <the-section title="切换数据">
    <d2-button @click="toggle">Toggle arrow</d2-button>
  </the-section>
  <the-section title="基础">
    <d2-icon icon="mdi:account-circle"/>
    <d2-icon icon="mdi:arrow-left"/>
    <d2-icon :icon="`mdi:arrow-${ arrow }`"/>
  </the-section>
  <the-section title="颜色 通过 class 设置">
    <d2-icon class="text-indigo-500" icon="mdi:account-circle"/>
    <d2-icon class="text-indigo-500" icon="mdi:arrow-left"/>
    <d2-icon class="text-indigo-500" :icon="`mdi:arrow-${ arrow }`"/>
  </the-section>
  <the-section title="颜色 通过 style 设置">
    <d2-icon style="color: #6366F1;" icon="mdi:account-circle"/>
    <d2-icon style="color: #6366F1;" icon="mdi:arrow-left"/>
    <d2-icon style="color: #6366F1;" :icon="`mdi:arrow-${ arrow }`"/>
  </the-section>
  <the-section title="大小 通过 class 设置">
    <d2-icon class="text-4xl" icon="mdi:account-circle"/>
    <d2-icon class="text-4xl" icon="mdi:arrow-left"/>
    <d2-icon class="text-4xl" :icon="`mdi:arrow-${ arrow }`"/>
  </the-section>
  <the-section title="大小 通过 style 设置">
    <d2-icon style="font-size: 2.25rem; line-height: 2.5rem;" icon="mdi:account-circle"/>
    <d2-icon style="font-size: 2.25rem; line-height: 2.5rem;" icon="mdi:arrow-left"/>
    <d2-icon style="font-size: 2.25rem; line-height: 2.5rem;" :icon="`mdi:arrow-${ arrow }`"/>
  </the-section>
  <the-section title="slot 传参">
    <d2-icon>mdi:account-circle</d2-icon>
    <d2-icon>mdi:arrow-left</d2-icon>
    <d2-icon>mdi:arrow-{{ arrow }}</d2-icon>
  </the-section>
  <the-section title="设置图标类型">
    <d2-icon collection="mdi" icon="account-circle"/>
    <d2-icon collection="mdi" icon="arrow-left"/>
    <d2-icon collection="mdi" :icon="`arrow-${ arrow }`"/>
  </the-section>
  <the-section title="设置图标类型 图标组">
    <d2-icon-group collection="mdi">
      <d2-icon icon="account-circle"/>
      <d2-icon icon="arrow-left"/>
      <d2-icon :icon="`arrow-${ arrow }`"/>
    </d2-icon-group>
  </the-section>
  <the-section title="图标组内单独设置">
    <d2-icon-group collection="mdi">
      <d2-icon icon="account-circle"/>
      <d2-icon icon="arrow-left"/>
      <d2-icon :icon="`arrow-${ arrow }`"/>
      <d2-icon icon="ri:github-fill"/>
      <d2-icon collection="ri" icon="github-fill"/>
    </d2-icon-group>
  </the-section>
  <the-section title="彩色图标">
    <d2-icon icon="flat-color-icons:google"/>
    <d2-icon icon="flat-color-icons:steam"/>
  </the-section>
  <the-section title="旋转">
    <d2-icon icon="mdi:loading" spin/>
  </the-section>
</template>

<script>
import { ref } from 'vue'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    const option = ['left', 'right']
    let index = 0

    const arrow = ref(option[index])

    function toggle () {
      index = Math.abs(index - 1)
      arrow.value = option[index]
    }

    return {
      arrow,
      toggle
    }
  }
}
</script>
