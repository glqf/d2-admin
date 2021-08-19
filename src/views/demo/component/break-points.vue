<template>
  <d2-break-point
    :data="{
      width: [100, { md: 50, lg: 25 }],
      height: [200, { md: 100, lg: 400 }]
    }"
    v-slot="status">
    <pre>{{ status }}</pre>
    {{ status.responsive(100, { md: 50, lg: 25 }) }}
  </d2-break-point>
</template>
