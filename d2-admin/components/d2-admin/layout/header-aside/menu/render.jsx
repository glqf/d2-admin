export function renderMenus ({
  menus = [],
  onSelect = function () {}
}) {
  return (
    <el-menu onSelect={ onSelect }>
      {
        menus.map(menu => {
          if (menu.children) return renderSubmenu(menu)
          return renderMenuItem(menu)
        })
      }
    </el-menu>
  )
}

export function renderMenuItem (menu) {
  return (
    <el-menu-item index={ menu.link }>
      {
        {
          title: () => menu.title,
          default: () => <d2-icon name={ menu.icon }/>
        }
      }
    </el-menu-item>
  )
}

export function renderSubmenu (menu) {
  return (
    <el-sub-menu>
      {
        {
          title: () => [
            <i class="el-icon-location"></i>,
            <span>{ menu.title }</span>
          ],
          default: () => menu.children.map(menu => {
            if (menu.children) { return renderSubmenu(menu) }
            return renderMenuItem(menu)
          })
        }
      }
    </el-sub-menu>
  )
}
