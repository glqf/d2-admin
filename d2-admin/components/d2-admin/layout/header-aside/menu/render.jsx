export function renderItem (menu) {
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

export function renderSub (menu) {
  return (
    <el-sub-menu>
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
}

export const renderMenu = menu => menu.children ? renderSub(menu) : renderItem(menu)
