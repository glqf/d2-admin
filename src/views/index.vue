<template>
  <a-space>
    <a-button v-for="route in routes" :key="route.name">
      <router-link :to="route.path">
        {{ route.path }}
      </router-link>
    </a-button>
  </a-space>
</template>

<script setup>
import routes from 'virtual:generated-pages'
</script>
