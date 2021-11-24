<template>
  <div></div>
  <div>
    <slot/>
  </div>
</template>

<script>
import { makeNameByUrl } from 'd2/utils/component.js'

export default {
  name: makeNameByUrl(import.meta.url)
}
</script>
