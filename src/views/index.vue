<route>
{
  meta: {
    title: '首页'
  }
}
</route>

<template>
  <el-button v-for="route in routes" :key="route.name">
    <router-link :to="route.path">
      {{ route?.meta?.title || route.path }}
    </router-link>
  </el-button>
</template>

<script setup>
import routes from 'virtual:generated-pages'
</script>
