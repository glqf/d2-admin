<template>
  <the-section title="button">
    <d2-button>button</d2-button>
  </the-section>
  <the-section title="chinese">
    <d2-button>按钮</d2-button>
  </the-section>
  <the-section title="inline">
    <p class="align-middle">
      text<d2-button>button</d2-button>text
    </p>
  </the-section>
  <the-section title="inline el-button">
    <p class="align-middle">
      text
      <button type="button" class="el-button">123</button>
      text
    </p>
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

<style lang="scss" scoped>
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFF;
  border: 1px solid #DCDFE6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
}
</style>