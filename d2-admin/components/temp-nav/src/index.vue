<template>
  <div>
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
    >
      <el-button>
        {{ route?.meta?.title || route.path }}
      </el-button>
    </router-link>
  </div>
</template>

<script setup>
import routes from 'virtual:generated-pages'
</script>
