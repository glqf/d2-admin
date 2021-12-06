<route>
{
  "meta": {
    "d2admin.layout.dashboard.customBody": true
  }
}
</route>

<template>
  <d2-admin-layout-dashboard-container>
    <template #header>
      <a-button>Button</a-button>
    </template>
    <template #footer>
      <a-button>Button</a-button>
    </template>
    <ul>
      <li v-for="n in 100" :key="n">{{ n }}</li>
    </ul>
  </d2-admin-layout-dashboard-container>
</template>
