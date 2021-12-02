<route>
{}
</route>

<template>
  <demo-section title="break point">
    <d2-break-point v-slot="{ md }">
      <span v-if="md" class="text-indigo-500">this text only show when md</span>
      <span v-else class="text-gray-300">resize window to md</span>
    </d2-break-point>
  </demo-section>
</template>
