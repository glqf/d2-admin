<template>
  <d2-tooltip>
    <template v-slot:trigger>
      <a-button @click="onButtonClick">Trigger</a-button>
    </template>
  </d2-tooltip>
</template>

<script setup>
function onButtonClick () {
  console.log('onButtonClick')
}
</script>
