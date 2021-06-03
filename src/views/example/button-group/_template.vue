<template>
  <the-section title="尺寸">
    <div v-for="size in sizes" :key="size" class="mb-4">
      <d2-button :size="size" class="mr-8">{{ size }} one</d2-button>
      <d2-button-group>
        <d2-button :size="size">{{ size }}</d2-button>
        <d2-button :size="size">{{ size }}</d2-button>
        <d2-button :size="size">{{ size }}</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :size="size">{{ size }}</d2-button>
        <d2-button :size="size">{{ size }}</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :size="size">{{ size }}</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="多色">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color">button</d2-button>
        <d2-button :color="color">button</d2-button>
        <d2-button :color="color">button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color">button</d2-button>
        <d2-button :color="color">button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color">button</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="圆角">
    <d2-button-group>
      <d2-button round>button</d2-button>
      <d2-button round>button</d2-button>
      <d2-button round>button</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button round>button</d2-button>
      <d2-button round>button</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button round>button</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="圆角 多色">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" round>button</d2-button>
        <d2-button :color="color" round>button</d2-button>
        <d2-button :color="color" round>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" round>button</d2-button>
        <d2-button :color="color" round>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" round>button</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="朴素">
    <d2-button-group>
      <d2-button plain>button</d2-button>
      <d2-button plain>button</d2-button>
      <d2-button plain>button</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button plain>button</d2-button>
      <d2-button plain>button</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button plain>button</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="朴素 多色">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" plain>button</d2-button>
        <d2-button :color="color" plain>button</d2-button>
        <d2-button :color="color" plain>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain>button</d2-button>
        <d2-button :color="color" plain>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain>button</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="朴素 多色 圆角">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" plain round>button</d2-button>
        <d2-button :color="color" plain round>button</d2-button>
        <d2-button :color="color" plain round>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain round>button</d2-button>
        <d2-button :color="color" plain round>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain round>button</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="禁用">
    <d2-button-group>
      <d2-button disabled>button</d2-button>
      <d2-button disabled>button</d2-button>
      <d2-button disabled>button</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button disabled>button</d2-button>
      <d2-button disabled>button</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button disabled>button</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="禁用 多色">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" disabled>button</d2-button>
        <d2-button :color="color" disabled>button</d2-button>
        <d2-button :color="color" disabled>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" disabled>button</d2-button>
        <d2-button :color="color" disabled>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" disabled>button</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="禁用 多色 朴素">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" plain disabled>button</d2-button>
        <d2-button :color="color" plain disabled>button</d2-button>
        <d2-button :color="color" plain disabled>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain disabled>button</d2-button>
        <d2-button :color="color" plain disabled>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" plain disabled>button</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="轮廓">
    <d2-button-group>
      <d2-button ring>button</d2-button>
      <d2-button ring>button</d2-button>
      <d2-button ring>button</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button ring>button</d2-button>
      <d2-button ring>button</d2-button>
    </d2-button-group>
    <d2-button-group>
      <d2-button ring>button</d2-button>
    </d2-button-group>
  </the-section>
  <the-section title="轮廓 多色">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" ring>button</d2-button>
        <d2-button :color="color" ring>button</d2-button>
        <d2-button :color="color" ring>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" ring>button</d2-button>
        <d2-button :color="color" ring>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" ring>button</d2-button>
      </d2-button-group>
    </div>
  </the-section>
  <the-section title="轮廓 多色 厚度">
    <div v-for="color in colors" :key="color" class="mb-4">
      <d2-button-group>
        <d2-button :color="color" :ring-width="4" ring>button</d2-button>
        <d2-button :color="color" :ring-width="4" ring>button</d2-button>
        <d2-button :color="color" :ring-width="4" ring>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" :ring-width="4" ring>button</d2-button>
        <d2-button :color="color" :ring-width="4" ring>button</d2-button>
      </d2-button-group>
      <d2-button-group>
        <d2-button :color="color" :ring-width="4" ring>button</d2-button>
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
