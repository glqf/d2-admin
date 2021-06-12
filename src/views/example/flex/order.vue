<template>
  <the-section title="order">
    <d2-flex>
      <d2-flex
        v-for="n in orders.length"
        :key="n"
        :order="orders[n]"
      >
        {{ orders[n] }}
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
      orders: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>
