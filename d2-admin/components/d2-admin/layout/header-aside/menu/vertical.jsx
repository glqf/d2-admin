import { defineComponent } from 'vue'
import { renderMenu } from './render.jsx'
import menus from '@/menus/index.js'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const router = useRouter()

    function onSelect (menuLink) {
      router.push(menuLink)
    }

    return {
      onSelect
    }
  },
  render () {
    return (
      <el-menu onSelect={ this.onSelect }>
        { menus.map(renderMenu) }
      </el-menu>
    )
  }
})
