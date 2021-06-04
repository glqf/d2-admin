<template>
  <the-section title="圆角">
    <d2-button-group>
      <d2-button round>item</d2-button>
      <d2-button round>item</d2-button>
      <d2-button round>item</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button round>item</d2-button>
      <d2-button round>item</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button round>item</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="圆角 多色">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" round>item</d2-button>
        <d2-button :color="color" round>item</d2-button>
        <d2-button :color="color" round>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" round>item</d2-button>
        <d2-button :color="color" round>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" round>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="朴素">
    <d2-button-group>
      <d2-button plain>item</d2-button>
      <d2-button plain>item</d2-button>
      <d2-button plain>item</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button plain>item</d2-button>
      <d2-button plain>item</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button plain>item</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="朴素 多色">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" plain>item</d2-button>
        <d2-button :color="color" plain>item</d2-button>
        <d2-button :color="color" plain>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain>item</d2-button>
        <d2-button :color="color" plain>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="朴素 多色 圆角">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" plain round>item</d2-button>
        <d2-button :color="color" plain round>item</d2-button>
        <d2-button :color="color" plain round>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain round>item</d2-button>
        <d2-button :color="color" plain round>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain round>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="禁用">
    <d2-button-group>
      <d2-button disabled>item</d2-button>
      <d2-button disabled>item</d2-button>
      <d2-button disabled>item</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button disabled>item</d2-button>
      <d2-button disabled>item</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button disabled>item</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="禁用 多色">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" disabled>item</d2-button>
        <d2-button :color="color" disabled>item</d2-button>
        <d2-button :color="color" disabled>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" disabled>item</d2-button>
        <d2-button :color="color" disabled>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" disabled>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="禁用 多色 朴素">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" plain disabled>item</d2-button>
        <d2-button :color="color" plain disabled>item</d2-button>
        <d2-button :color="color" plain disabled>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain disabled>item</d2-button>
        <d2-button :color="color" plain disabled>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain disabled>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="轮廓">
    <d2-button-group>
      <d2-button ring>item</d2-button>
      <d2-button ring>item</d2-button>
      <d2-button ring>item</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button ring>item</d2-button>
      <d2-button ring>item</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button ring>item</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="轮廓 多色">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" ring>item</d2-button>
        <d2-button :color="color" ring>item</d2-button>
        <d2-button :color="color" ring>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" ring>item</d2-button>
        <d2-button :color="color" ring>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" ring>item</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="轮廓 多色 厚度">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" :ring-width="4" ring>item</d2-button>
        <d2-button :color="color" :ring-width="4" ring>item</d2-button>
        <d2-button :color="color" :ring-width="4" ring>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" :ring-width="4" ring>item</d2-button>
        <d2-button :color="color" :ring-width="4" ring>item</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" :ring-width="4" ring>item</d2-button>
      </d2-button-group>
    </div>
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
