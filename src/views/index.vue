<route>
{
  meta: {
    title: '首页'
  }
}
</route>

<template>
  <d2-layout-header-aside>
    <demo-js/>
    <demo-abc/>
    <hello-world/>
    <d2-admin-pre-auto/>
    <demo-1/>
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
    >
      <el-button>
        {{ route?.meta?.title || route.path }}
      </el-button>
    </router-link>
    <!-- <p v-for="n in 100" :key="n">{{ n }}</p> -->
    <!-- <span class="iconify" data-icon="mdi:ab-testing"></span> -->
    <iconify-mdi-ab-testing/>
    <iconify-carbon-ai-status/>
  </d2-layout-header-aside>
</template>

<script setup>
import routes from 'virtual:generated-pages'
import D2LayoutHeaderAside from 'd2-admin/layouts/header-aside/index.vue'
</script>
