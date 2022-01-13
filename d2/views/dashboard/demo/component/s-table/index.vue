<route>
{
  "meta": {
    "d2admin.menu.title": "-"
  }
}
</route>

<template>
  <s-table
    ref="stable"
    :columns="columns"
    :scroll="{ y: 400 }"
    :pagination="false"
    :data-source="dataSource"
  />
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { hideSurelyVueTableWatermarkOnDev } from 'd2/utils/helper/surely-vue.js'

const columns = [
  { title: 'Full Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Column 1', dataIndex: 'address' },
  { title: 'Column 2', dataIndex: 'address' },
  { title: 'Column 3', dataIndex: 'address' },
  { title: 'Column 4', dataIndex: 'address' },
  { title: 'Column 5', dataIndex: 'address' }
]

export default defineComponent({
  setup() {
    const stable = ref(null)
    const data = []
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`
      })
    }
    onMounted(() => {
      hideSurelyVueTableWatermarkOnDev()
    })
    return {
      stable,
      dataSource: ref(data),
      columns: ref(columns)
    }
  }
})
</script>
