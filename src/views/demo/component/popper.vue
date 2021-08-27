<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <d2-popper>
    <template v-slot:trigger>
      <a-button>Trigger Button</a-button>
    </template>
    <a-alert message="Success" type="success"/>
  </d2-popper>
</template>
