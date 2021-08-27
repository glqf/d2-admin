<template>
  <d2-config v-bind="config">
    <div style="padding: 100px;">
      <router-view/>
    </div>
  </d2-config>
</template>

<script setup>
const config = {
  iconCollection: 'mdi'
}
</script>
