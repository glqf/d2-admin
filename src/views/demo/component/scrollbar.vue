<template>
  <d2-scrollbar style="height: 200px; width: 200px;">
    <p v-for="n in 100" :key="n">
      {{ n }}
    </p>
  </d2-scrollbar>
</template>
