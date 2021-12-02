<route>
{}
</route>

<template>
  <a-sub-menu :key="getMenuId(menu)">
    <template #icon>
      <d2-icon :name="getMenuIcon(menu)"/>
    </template>
    <template #title>
      {{ getMenuTitle(menu) }}
    </template>
    <d2-admin-layout-dashboard-menu-render
      v-for="child of getMenuChildren(menu)"
      :key="getMenuId(child)"
      :menu="child"
    />
  </a-sub-menu>
</template>

<script>
import { makeNameByUrl } from 'd2/utils/component.js'
import { defineComponent } from 'vue'
import { getMenuId, getMenuTitle, getMenuIcon, getMenuChildren } from 'd2/utils/menu.js'

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
      getMenuIcon,
      getMenuChildren
    }
  }
})
</script>
