<route>
{
  "meta": {
    "d2admin.layout.dashboard.customBody": true,
    "d2admin.menu.title": "自定义"
  }
}
</route>

<template>
  <d2-admin-layout-dashboard-container>
    <template v-if="headerActive" #header>
      <h1 class="text-lg">Header</h1>
    </template>
    <template v-if="footerActive" #footer>
      <h1 class="text-lg">Footer</h1>
    </template>
    <section class="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
      <a-space>
        <a-button @click="headerToggle">切换顶栏显示</a-button>
        <a-button @click="footerToggle">切换底栏显示</a-button>
      </a-space>
    </section>
    <demo-markdown-article/>
  </d2-admin-layout-dashboard-container>
</template>

<script>
import { useSwitch } from 'd2/use/switch.js'

export default {
  setup () {
    const {
      value: headerActive,
      toggle: headerToggle
    } = useSwitch(true)

    const {
      value: footerActive,
      toggle: footerToggle
    } = useSwitch(true)

    return {
      headerActive,
      headerToggle,
      footerActive,
      footerToggle
    }
  }
}
</script>
