<route>
{
  "meta": {
    "d2admin.layout.dashboard.customBody": true
  }
}
</route>

<template>
  <d2-admin-layout-dashboard-container>
    <template v-if="headeractive" #header>
      <a-button>Button</a-button>
    </template>
    <template v-if="footeractive" #footer>
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
import { ref } from 'vue'

export default {
  setup () {
    const headeractive = ref(true)
    const footeractive = ref(true)

    function headerToggle () {
      headeractive.value = !headeractive.value
    }

    function footerToggle () {
      footeractive.value = !footeractive.value
    }

    return {
      headeractive,
      footeractive,
      headerToggle,
      footerToggle
    }
  }
}
</script>
