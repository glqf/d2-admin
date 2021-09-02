<route>
{
  meta: {
    title: '首页'
  }
}
</route>

<template>
  <d2-admin-layout-header-aside>
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
  </d2-admin-layout-header-aside>
</template>

<script setup>
import routes from 'virtual:generated-pages'
</script>
