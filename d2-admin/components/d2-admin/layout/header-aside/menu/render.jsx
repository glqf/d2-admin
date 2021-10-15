import {
  getMenuId,
  getMenuTitle,
  getMenuIcon,
  getMenuChildren,
  hasChildren
} from 'd2-admin/utils/menu.js'

export const renderItem = menu => (
  <el-menu-item index={ getMenuId(menu) }>
    {
      {
        title: () => getMenuTitle(menu),
        default: () => <d2-icon name={ getMenuIcon(menu) }/>
      }
    }
  </el-menu-item>
)

export const renderSub = menu => (
  <el-sub-menu index={ getMenuId(menu) }>
    {
      {
        title: () => [
          <i class="el-icon-location"/>,
          <span>{ getMenuTitle(menu) }</span>
        ],
        default: () => getMenuChildren(menu).map(menu => renderMenu(menu))
      }
    }
  </el-sub-menu>
)

export const renderMenu = menu => (hasChildren(menu) ? renderSub : renderItem)(menu)

export const renderMenus = (menus = [], props = {}) => (
  <el-menu {...props}>
    { menus.map(renderMenu) }
  </el-menu>
)
