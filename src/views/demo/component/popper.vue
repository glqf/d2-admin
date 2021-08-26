<template>
  <d2-popper>
    <template v-slot:trigger>
      <a-button @click="onTriggerButtonClick">Trigger Button</a-button>
    </template>
    <a-button @click="onPopperButtonClick">Popper Button</a-button>
    <a-button @click="onPopperButtonClick">Popper Button</a-button>
    <a-button @click="onPopperButtonClick">Popper Button</a-button>
  </d2-popper>
</template>

<script setup>
function onTriggerButtonClick () {
  console.log('onTriggerButtonClick')
}
function onPopperButtonClick () {
  console.log('onPopperButtonClick')
}
</script>
