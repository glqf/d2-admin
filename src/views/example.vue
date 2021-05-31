<template>
  <h2 class="mb-4 text-lg text-gray-500 select-none">Example</h2>
  <div>
    <d2-button
      v-for="(group, groupIndex) in groupNames"
      :key="group"
      :color="groupActiveIndex === groupIndex ? 'indigo' : ''"
      size="mini"
      @click="groupActiveIndex = groupIndex">
      {{ group }}
    </d2-button>
  </div>
  <hr class="my-4">
  <div>
    <router-link
      v-for="item in groupActiveMenu"
      :key="item"
      :to="item"
      class="mr-2">
      <d2-button
        :color="$route.path === item ? 'indigo' : ''"
        size="mini"
        class="mb-2">
        {{ label(item) }}
      </d2-button>
    </router-link>
  </div>
  <hr class="mt-2">
  <router-view/>
</template>

<script>
import routes from 'virtual:generated-pages'
import { groupBy } from 'lodash-es'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

function make (source, path = '') {
  const _path = (path ? `${path}/` : '') + source.path
  const result = {
    path: _path
  }
  if (source.children) {
    result.children = source.children.map(e => make(e, _path))
  }
  return result
}

const group = groupBy(
  (
    (
      routes
        .map(e => make(e))
        .find(e => e.path === '/example') || {}
    )
      .children || []
  )
    .map(e => e.path),
  menu => menu.split('/')[2]
)

const groupNames = Object.keys(group).sort()

export default {
  setup () {
    const route = useRoute()

    const groupActiveNameInRoute = route.path.replace(new RegExp('/example/'), '').split('/')[0] || ''

    const groupActiveIndex = ref(groupNames.findIndex(e => e === groupActiveNameInRoute) || 0)

    const groupActiveName = computed(() => groupNames[groupActiveIndex.value])

    const groupActiveMenu = computed(() => group[groupActiveName.value])

    function label (text) {
      return text.replace(new RegExp(`/example/${groupActiveName.value}/`), '')
    }
    
    return {
      groupNames,
      groupActiveIndex,
      groupActiveMenu,
      label
    }
  }
}
</script>
