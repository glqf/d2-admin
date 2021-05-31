<template>
  <the-section title="button">
    <d2-button>button</d2-button>
  </the-section>
  <the-section title="slot">
    <d2-button>
      <p class="text-lg text-left">Title</p>
      <p class="text-sm text-left">Description</p>
    </d2-button>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  }
}
</script>
