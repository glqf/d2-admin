<template>
  <d2-scroll class="body__container">
    <div class="container__space-header"/>
    <div class="container__body">
      <div class="container__body-inner">
        <slot/>
      </div>
    </div>
  </d2-scroll>
</template>

<script>
import { makeNameByUrl } from 'd2/utils/component.js'

export default {
  name: makeNameByUrl(import.meta.url)
}
</script>
