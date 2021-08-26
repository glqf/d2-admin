<template>
  <d2-tooltip>
    <template v-slot:trigger>
      <a-button @click="onButtonClick">Trigger Button</a-button>
    </template>
    <span>popper content</span>
  </d2-tooltip>
</template>

<script setup>
function onButtonClick () {
  console.log('onButtonClick')
}
</script>
