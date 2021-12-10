<route>
{
  "meta": {
    "d2admin.layout.dashboard.customBody": true
  }
}
</route>

<template>
  <d2-admin-layout-dashboard-container>
    <template v-if="headerActive" #header>
      <a-button>Button</a-button>
    </template>
    <template v-if="footerActive" #footer>
      <a-button>Button</a-button>
    </template>
    <section class="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
      <a-space>
        <a-button @click="headerToggle">切换 Header</a-button>
        <a-button @click="footerToggle">切换 Footer</a-button>
      </a-space>
    </section>
    <demo-markdown-article/>
  </d2-admin-layout-dashboard-container>
</template>

<script>
import { useBoolean } from 'd2/use/boolean.js'

export default {
  setup () {
    const {
      value: headerActive,
      toggle: headerToggle
    } = useBoolean(true)

    const {
      value: footerActive,
      toggle: footerToggle
    } = useBoolean(true)

    return {
      headerActive,
      footerActive,
      headerToggle,
      footerToggle
    }
  }
}
</script>
