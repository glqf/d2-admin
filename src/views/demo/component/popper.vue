<template>
  <d2-popper>
    <template v-slot:trigger>
      <a-button>Trigger Button</a-button>
    </template>
    <a-button @click="onPopperButtonClick">Popper</a-button>
  </d2-popper>
</template>

<script setup>
function onPopperButtonClick () {
  console.log('onPopperButtonClick')
}
</script>
