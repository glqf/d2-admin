<template>
  <d2-config icon-collection="mdi">
    <router-view/>
  </d2-config>
</template>

<script setup>
import { creatStore } from 'd2-admin/store/index.js'

creatStore()
</script>
