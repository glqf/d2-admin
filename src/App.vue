<template>
  <d2-components-config v-bind="config">
    <router-view/>
  </d2-components-config>
</template>

<script setup>
const config = {
  iconCollection: 'fa',
  testKey: 'hello',
  undefinedKey: 'xxx'
}
</script>
