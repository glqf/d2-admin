<route>
{
  "meta": {}
}
</route>

<template>
  <d2-admin-layout-dashboard-menu-render-sub
    v-if="hasChildren(menu)"
    :menu="menu"
  />
  <d2-admin-layout-dashboard-menu-render-item
    v-else
    :menu="menu"
  />
</template>

<script>
import { makeNameByUrl } from 'd2/utils/component.js'
import { hasChildren } from 'd2/utils/menu.js'

export default {
  name: makeNameByUrl(import.meta.url),
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup () {
    return {
      hasChildren
    }
  }
}
</script>
