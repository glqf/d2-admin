<route>
{
  meta: {
    title: '首页'
  }
}
</route>

<template>
  <d2-admin-layout-header-aside>
    <p v-for="n in 100" :key="n">{{ n }}</p>
  </d2-admin-layout-header-aside>
</template>
