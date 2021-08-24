<template>
  <d2-break-point
    :data="{
      width: [100, { md: 50, lg: 25 }],
      height: [200, { md: 100, lg: 400 }]
    }"
    v-slot="{
      min, sm, md, lg, xl, xxl,
      active, data, width,
      responsive
    }">
    <p>min: {{ min }}</p>
    <p>sm: {{ sm }}</p>
    <p>md: {{ md }}</p>
    <p>lg: {{ lg }}</p>
    <p>xl: {{ xl }}</p>
    <p>xxl: {{ xxl }}</p>
    <p>active: {{ active }}</p>
    <p>data: {{ data }}</p>
    <p>width: {{ width }}</p>
    {{ responsive(100, { md: 50, lg: 25 }) }}
  </d2-break-point>
</template>
