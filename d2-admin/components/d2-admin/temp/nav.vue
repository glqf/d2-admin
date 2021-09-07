<template>
  <div>
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
    >
      {{ route?.meta?.title || route.path }} | 
    </router-link>
  </div>
  <pre>{{ routes }}</pre>
</template>

<script setup>
import routes from 'virtual:generated-pages'
</script>
