<template>
  <the-section title="order">
    <d2-flex>
      <d2-flex v-for="n in orders.length" :key="n" :order="orders[n - 1]">
        {{ orders[n - 1] }}
      </d2-flex>
    </d2-flex>
  </the-section>
</template>

<script>
import TheSection from '../components/the-section.vue'

export default {
  components: {
    TheSection
  },
  setup () {
    return {
      orders: [1, 4, 3, -2, 2, -1, 0]
    }
  }
}
</script>
