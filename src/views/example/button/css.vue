<template>
  <the-section title="button">
    <button class="css-button"><span>button</span></button>
  </the-section>
  <the-section title="button + icon">
    <button class="css-button"><d2-icon icon="mdi:account-circle"/><span>button</span></button>
  </the-section>
  <the-section title="button + text">
    <p>text<button class="css-button"><span>button</span></button>text</p>
  </the-section>
  <the-section title="button + icon + text">
    <p>text<button class="css-button"><d2-icon icon="mdi:account-circle"/><span>button</span></button>text</p>
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

<style lang="scss">
.css-button {
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0,0,0,.65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  span {
    display: inline-block;
  }
  .d2-icon {
    line-height: 1;
    color: inherit;
    font-style: normal;
    text-align: center;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    svg {
      display: inline-block;
    }
  }
}
</style>
