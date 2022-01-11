import { Menu, routeMenus } from 'd2/utils/menu.js'

export const dashboardIndexMenu = new Menu('控制台').url('/dashboard').icon('icon-park-outline:dashboard')

export const indexMenu = new Menu('首页').url('/').icon('icon-park-outline:home')

export const dashboardDemoComponentD2ScrollMenus = new Menu('滚动')
  .icon('icon-park-outline:move')
  .scope('/dashboard/demo/component/d2-scroll')
  .add(routeMenus({
    match: /^dashboard-demo-component-d2-scroll/,
    basePath: 'demo/component/d2-scroll'
  }))

export const dashboardDemoComponentD2SvgMenus = new Menu('SVG')
  .icon('icon-park-outline:pic-one')
  .scope('/dashboard/demo/component/d2-svg')
  .add(routeMenus({
    match: /^dashboard-demo-component-d2-svg/,
    basePath: 'demo/component/d2-svg'
  }))

export const dashboardDemoComponentD2IconMenus = new Menu('图标')
  .icon('icon-park-outline:emotion-happy')
  .scope('/dashboard/demo/component/d2-icon')
  .add(routeMenus({
    match: /^dashboard-demo-component-d2-icon/,
    basePath: 'demo/component/d2-icon'
  }))

export const dashboardDemoComponentD2BreakPointMenus = new Menu('断点')
  .icon('icon-park-outline:distribute-horizontally')
  .scope('/dashboard/demo/component/d2-break-point')
  .add(routeMenus({
    match: /^dashboard-demo-component-d2-break-point/,
    basePath: 'demo/component/d2-break-point'
  }))

export const dashboardDemoComponentD2FlexMenus = new Menu('Flex')
  .icon('icon-park-outline:carousel')
  .scope('/dashboard/demo/component/d2-flex')
  .add(routeMenus({
    match: /^dashboard-demo-component-d2-flex/,
    basePath: 'demo/component/d2-flex'
  }))

export const dashboardDemoComponentSTableMenus = new Menu('Surely Vue')
  .icon('icon-park-outline:table-file')
  .scope('/dashboard/demo/component/s-table')
  .add(routeMenus({
    match: /^dashboard-demo-component-s-table/,
    basePath: 'demo/component/s-table'
  }))

export const dashboardDemoComponentMenus = new Menu('组件')
  .icon('icon-park-outline:components')
  .add(new Menu('概览').url('/dashboard/demo/component').icon('icon-park-outline:handle-round').index())
  .add(dashboardDemoComponentD2ScrollMenus)
  .add(dashboardDemoComponentD2SvgMenus)
  .add(dashboardDemoComponentD2IconMenus)
  .add(dashboardDemoComponentD2BreakPointMenus)
  .add(dashboardDemoComponentD2FlexMenus)
  .add(dashboardDemoComponentSTableMenus)

export const dashboardDemoLayoutDashboardMenus = new Menu('控制台布局')
  .icon('icon-park-outline:page')
  .scope('/dashboard/demo/layout/dashboard')
  .add(routeMenus({
    match: /^dashboard-demo-layout-dashboard/,
    basePath: 'demo/layout/dashboard'
  }))

export const dashboardDemoLayoutMenus = new Menu('布局')
  .icon('icon-park-outline:page')
  .add(new Menu('概览').url('/dashboard/demo/layout').icon('icon-park-outline:handle-round').index())
  .add(dashboardDemoLayoutDashboardMenus)

export const dashboardDocumentMenus = new Menu('文档')
  .icon('icon-park-outline:doc-detail')
  .scope('/dashboard/document')
  .add(routeMenus({
    match: /^dashboard-document/,
    basePath: 'document'
  }))
