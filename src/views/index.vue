<route>
{
  meta: {
    title: '首页'
  }
}
</route>

<template>
  <router-link
    v-for="route in routes"
    :key="route.name"
    :to="route.path"
  >
    <el-button>
      {{ route?.meta?.title || route.path }}
    </el-button>
  </router-link>
</template>

<script setup>
import routes from 'virtual:generated-pages'
</script>
