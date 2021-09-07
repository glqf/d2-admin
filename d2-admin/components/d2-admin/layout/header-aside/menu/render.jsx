export function renderMenu ({
  menu: []
}) {
  return (
    <el-menu>
      {
        renderMenuItem()
      }
    </el-menu>
  )
}

export function renderMenuItem () {
  return (
    <el-menu-item>menu</el-menu-item>
  )
}

export function renderSubmenu () {}
