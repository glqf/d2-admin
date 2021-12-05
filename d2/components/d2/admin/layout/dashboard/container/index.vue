<route>
{}
</route>

<template>
  <d2-scroll class="body__scroll">
    <div class="scroll__inner">
      <slot/>
    </div>
  </d2-scroll>
</template>

<script>
import { makeNameByUrl } from 'd2/utils/component.js'

export default {
  name: makeNameByUrl(import.meta.url)
}
</script>
