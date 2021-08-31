<route>
{
  meta: {
    title: '首页'
  }
}
</route>

<template>
  <D2LayoutHeaderAside>
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
    >
      <el-button>
        {{ route?.meta?.title || route.path }}
      </el-button>
    </router-link>
  </D2LayoutHeaderAside>
</template>

<script setup>
import routes from 'virtual:generated-pages'
import D2LayoutHeaderAside from '@/layouts/header-aside/index.jsx'
</script>
