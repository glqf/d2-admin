<route>
{
  meta: {
    title: '首页'
  }
}
</route>

<template>
  <a-space direction="vertical">
    <a-button v-for="route in routes" :key="route.name">
      <router-link :to="route.path">
        {{ route?.meta?.title || route.path }}
      </router-link>
    </a-button>
  </a-space>
</template>

<script setup>
import routes from 'virtual:generated-pages'
</script>
