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
      <template v-for="n in 30" :key="n">----------</template>
    </template>
    <template #footer>
      <template v-for="n in 30" :key="n">----------</template>
    </template>
    <ul>
      <li v-for="n in 100" :key="n">{{ n }}</li>
    </ul>
  </d2-admin-layout-dashboard-container>
</template>
