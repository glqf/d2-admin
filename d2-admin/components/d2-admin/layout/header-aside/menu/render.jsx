import { menuIdKey } from 'd2-admin/utils/menu.js'

export const renderItem = menu => (
  <el-menu-item index={ menu[menuIdKey] }>
    {
      {
        title: () => menu.title,
        default: () => <d2-icon name={ menu.icon }/>
      }
    }
  </el-menu-item>
)

export const renderSub = menu => (
  <el-sub-menu index={ menu[menuIdKey] }>
    {
      {
        title: () => [
          <i class="el-icon-location"></i>,
          <span>{ menu.title }</span>
        ],
        default: () => menu.children.map(menu => renderMenu(menu))
      }
    }
  </el-sub-menu>
)

export const renderMenu = menu => (menu.children ? renderSub : renderItem)(menu)

export const renderMenus = (menus = [], props = {}) => (
  <el-menu {...props}>
    { menus.map(renderMenu) }
  </el-menu>
)
