<template>
  isCustomBody
</template>

<script>
import { useD2AdminLayoutHeaderAside } from 'd2/components/d2/admin/layout/header-aside/use/index.js'

export default {
  setup () {
    const { activateCustomBody } = useD2AdminLayoutHeaderAside()
    activateCustomBody()
  }
}
</script>
