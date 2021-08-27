<template>
  <d2-popper>
    <template v-slot:trigger>
      <a-button>Trigger Button</a-button>
    </template>
    <a-button @click="onPopperButtonClick">Popper</a-button>
  </d2-popper>
  <a-button @mouseenter="mouseenter">onMouseenter</a-button>
</template>

<script setup>
function onPopperButtonClick () {
  console.log('onPopperButtonClick')
}
function mouseenter () {
  console.log('mouseenter')
}
</script>
