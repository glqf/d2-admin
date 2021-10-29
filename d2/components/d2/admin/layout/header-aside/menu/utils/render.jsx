import {
  getMenuId,
  getMenuTitle,
  getMenuIcon,
  getMenuChildren,
  hasChildren
} from 'd2/utils/menu.js'

function renderMenuIcon (menu) {
  const icon = getMenuIcon(menu)
  return icon ? <d2-icon name={ icon }/> : null
}

export const renderItem = menu => (
  <a-menu-item key={ getMenuId(menu) }>
    {
      {
        default: () => getMenuTitle(menu),
        icon: () => renderMenuIcon(menu)
      }
    }
  </a-menu-item>
)

export const renderSub = menu => (
  <a-sub-menu key={ getMenuId(menu) }>
    {
      {
        title: () => getMenuTitle(menu),
        icon: () => renderMenuIcon(menu),
        default: () => getMenuChildren(menu).map(menu => renderMenu(menu))
      }
    }
  </a-sub-menu>
)

export const renderMenu = menu => (hasChildren(menu) ? renderSub : renderItem)(menu)

export const renderMenus = (
  menus = [],
  props = {}
) => (
  <a-menu {...props}>
    { menus.map(renderMenu) }
  </a-menu>
)
