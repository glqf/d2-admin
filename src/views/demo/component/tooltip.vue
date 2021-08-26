<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <d2-tooltip>
    <template v-slot:trigger>
      <a-button @click="onTriggerButtonClick">Trigger Button</a-button>
    </template>
    <a-button @click="onPopperButtonClick">Popper Button</a-button>
    <a-button @click="onPopperButtonClick">Popper Button</a-button>
    <a-button @click="onPopperButtonClick">Popper Button</a-button>
  </d2-tooltip>
</template>

<script setup>
function onTriggerButtonClick () {
  console.log('onTriggerButtonClick')
}
function onPopperButtonClick () {
  console.log('onPopperButtonClick')
}
</script>
