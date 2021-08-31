<route>
{
  meta: {
    title: '首页'
  }
}
</route>

<template>
  <d2-layout-header-aside>
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
    >
      <el-button>
        {{ route?.meta?.title || route.path }}
      </el-button>
    </router-link>
    <p v-for="n in 100" :key="n">
      {{ n }}
    </p>
  </d2-layout-header-aside>
</template>

<script setup>
import routes from 'virtual:generated-pages'
import D2LayoutHeaderAside from '@/layouts/header-aside/index.vue'
</script>
