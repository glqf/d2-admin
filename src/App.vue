<template>
  <d2-config icon-collection="mdi">
    <router-view/>
  </d2-config>
</template>

<script setup>
import { registerStoreHooks } from 'd2-admin/store/index.js'
import { useCount } from 'd2-admin/store/hooks/use-count.js'

registerStoreHooks(useCount)
</script>
