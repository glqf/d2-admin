<template>
  <the-section title="color">
    <d2-button v-for="color in colors" :key="color" :color="color">{{ color }}</d2-button>
  </the-section>
  <the-section title="slot">
    <d2-button v-for="color in colors" :key="color" :color="color">
      <p class="text-lg text-left">Title</p>
      <p class="text-sm text-left">Description</p>
    </d2-button>
  </the-section>
  <the-section title="icon">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu">Menu</d2-button>
  </the-section>
  <the-section title="disabled">
    <d2-button v-for="color in colors" :key="color" :color="color" disabled>{{ color }}</d2-button>
  </the-section>
  <the-section title="plain">
    <d2-button v-for="color in colors" :key="color" :color="color" plain>{{ color }}</d2-button>
  </the-section>
  <the-section title="plain disabled">
    <d2-button v-for="color in colors" :key="color" :color="color" plain disabled>{{ color }}</d2-button>
  </the-section>
  <the-section title="plain icon">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu" plain>Menu</d2-button>
  </the-section>
  <the-section title="plain icon disabled">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu" plain disabled>Menu</d2-button>
  </the-section>
  <the-section title="ring">
    <d2-button v-for="color in colors" :key="color" :color="color" ring>{{ color }}</d2-button>
  </the-section>
  <the-section title="plain ring">
    <d2-button v-for="color in colors" :key="color" :color="color" plain ring>{{ color }}</d2-button>
  </the-section>
  <the-section title="text">
    <d2-button v-for="color in colors" :key="color" :color="color" text>{{ color }}</d2-button>
  </the-section>
  <the-section title="text disabled">
    <d2-button v-for="color in colors" :key="color" :color="color" text disabled>{{ color }}</d2-button>
  </the-section>
  <the-section title="text icon">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu" text>Menu</d2-button>
  </the-section>
  <the-section title="text icon disabled">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu" text disabled>Menu</d2-button>
  </the-section>
  <the-section title="round">
    <d2-button v-for="color in colors" :key="color" :color="color" round>{{ color }}</d2-button>
  </the-section>
  <the-section title="round plain">
    <d2-button v-for="color in colors" :key="color" :color="color" round plain>{{ color }}</d2-button>
  </the-section>
  <the-section title="round plain disabled">
    <d2-button v-for="color in colors" :key="color" :color="color" round plain disabled>{{ color }}</d2-button>
  </the-section>
  <the-section title="icon round">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu" round>{{ color }}</d2-button>
  </the-section>
  <the-section title="icon round plain">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu" round plain>{{ color }}</d2-button>
  </the-section>
  <the-section title="icon round plain disabled">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu" round plain disabled>{{ color }}</d2-button>
  </the-section>
  <the-section title="circle">
    <d2-button v-for="color in colors" :key="color" :color="color" circle>{{ color[0].toUpperCase() }}</d2-button>
  </the-section>
  <the-section title="circle plain">
    <d2-button v-for="color in colors" :key="color" :color="color" circle plain>{{ color[0].toUpperCase() }}</d2-button>
  </the-section>
  <the-section title="circle plain disabled">
    <d2-button v-for="color in colors" :key="color" :color="color" circle plain disabled>{{ color[0].toUpperCase() }}</d2-button>
  </the-section>
  <the-section title="icon circle">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu" circle>{{ color[0].toUpperCase() }}</d2-button>
  </the-section>
  <the-section title="icon circle plain">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu" circle plain>{{ color[0].toUpperCase() }}</d2-button>
  </the-section>
  <the-section title="icon circle plain disabled">
    <d2-button v-for="color in colors" :key="color" :color="color" icon="heroicons-solid:menu" circle plain disabled>{{ color[0].toUpperCase() }}</d2-button>
  </the-section>
</template>

<script>
import { colors } from 'd2-components/utils/const.js'
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      colors
    }
  }
}
</script>
