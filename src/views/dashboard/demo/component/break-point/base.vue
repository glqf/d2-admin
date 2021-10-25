<template>
  <demo-section title="break point">
    <d2-break-point v-slot="status">
      <demo-break-points-display :status="status"></demo-break-points-display>
    </d2-break-point>
  </demo-section>
</template>
