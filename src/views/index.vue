<template>
  <a-button>Index</a-button>
  <svg aria-hidden="true">
    <use xlink:href="#svg-icon-dev-html5"/>
  </svg>
  <span class="iconify" data-icon="fa:home"></span>
  <pre>{{ ids }}</pre>
</template>

<script setup>
import ids from 'virtual:svg-icons-names'
console.log(ids)
</script>
