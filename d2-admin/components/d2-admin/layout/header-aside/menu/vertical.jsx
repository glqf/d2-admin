import { defineComponent } from 'vue'
import { routesToMenus } from 'd2-admin/utils/vite-plugin-pages.js'
import { renderMenu } from './render.jsx'
import routes from 'virtual:generated-pages'

export default defineComponent({
  render () {
    return renderMenu({
      menu: routesToMenus(routes)
    })
  }
})
