<template>
  <d2-config v-bind="config">
    <router-view/>
  </d2-config>
</template>

<script setup>
const config = {
  iconCollection: 'mdi'
}
</script>
