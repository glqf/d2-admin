<route>
{
  "meta": {}
}
</route>

<template>
  <a-menu-item :key="getMenuId(menu)">
    <template #icon>
      <d2-icon :name="getMenuIcon(menu)"/>
    </template>
    {{ getMenuTitle(menu) }}
  </a-menu-item>
</template>

<script>
import { makeNameByUrl } from 'd2/utils/framework/component.js'
import { defineComponent } from 'vue'
import { getMenuId, getMenuTitle, getMenuIcon } from 'd2/utils/framework/menu.js'

export default defineComponent({
  name: makeNameByUrl(import.meta.url),
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup () {
    return {
      getMenuId,
      getMenuTitle,
      getMenuIcon
    }
  }
})
</script>
