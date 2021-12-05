<route>
{}
</route>

<template>
  <d2-scroll ref="scrollbar" class="body__scroll">
    <div class="scroll__inner">
      <slot/>
    </div>
  </d2-scroll>
  <div class="body__header container__blur">header</div>
  <div class="body__footer container__blur">footer</div>
</template>

<script>
import { makeNameByUrl } from 'd2/utils/component.js'

export default {
  name: makeNameByUrl(import.meta.url)
}
</script>
