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
  display: inline-block;
  box-sizing: border-box;
  background: #fff;
  text-align: center;
  margin: 0;
  padding: 2px 4px;
  font-size: 14px;
  line-height: 1;
  border: 1px solid #dcdfe6;
  overflow: hidden;
  vertical-align: text-bottom;
  span {
    display: inline-block;
    background-color: #666666;
    vertical-align: middle;
  }
  .d2-icon {
    display: inline-block;
    height: 1em;
    line-height: 1;
    background-color: #CCCCCC;
    svg {
      display: inline-block;
      background-color: red;
    }
  }
}
</style>
