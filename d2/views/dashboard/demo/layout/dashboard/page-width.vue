<route>
{}
</route>

<template>
  <div class="max-w-5xl mx-auto">
    <div class="bg-gray-50">
      <p v-for="n in 100" :key="n">{{ n }}</p>
    </div>
  </div>
</template>
