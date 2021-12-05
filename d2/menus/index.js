import { Menu, routeMenus } from 'd2/utils/menu.js'

export const dashboardIndexMenu = new Menu('控制台').url('/dashboard').icon('icon-park-outline:dashboard')

export const indexMenu = new Menu('首页').url('/').icon('icon-park-outline:home')

export const dashboardDemoComponentScrollMenus = new Menu('滚动')
  .icon('icon-park-outline:move')
  .scope('/dashboard/demo/component/scroll')
  .add(routeMenus({
    match: /^dashboard-demo-component-scroll/,
    basePath: 'demo/component/scroll'
  }))

export const dashboardDemoComponentSvgMenus = new Menu('SVG')
  .icon('icon-park-outline:pic-one')
  .scope('/dashboard/demo/component/svg')
  .add(routeMenus({
    match: /^dashboard-demo-component-svg/,
    basePath: 'demo/component/svg'
  }))

export const dashboardDemoComponentIconMenus = new Menu('图标')
  .icon('icon-park-outline:emotion-happy')
  .scope('/dashboard/demo/component/icon')
  .add(routeMenus({
    match: /^dashboard-demo-component-icon/,
    basePath: 'demo/component/icon'
  }))

export const dashboardDemoComponentBreakPointMenus = new Menu('断点')
  .icon('icon-park-outline:distribute-horizontally')
  .scope('/dashboard/demo/component/break-point')
  .add(routeMenus({
    match: /^dashboard-demo-component-break-point/,
    basePath: 'demo/component/break-point'
  }))

export const dashboardDemoComponentFlexMenus = new Menu('Flex')
  .icon('icon-park-outline:carousel')
  .scope('/dashboard/demo/component/flex')
  .add(routeMenus({
    match: /^dashboard-demo-component-flex/,
    basePath: 'demo/component/flex'
  }))

export const dashboardDemoComponentMenus = new Menu('组件')
  .icon('icon-park-outline:components')
  .add(new Menu('概览').url('/dashboard/demo/component').icon('icon-park-outline:handle-round').index())
  .add(dashboardDemoComponentScrollMenus)
  .add(dashboardDemoComponentSvgMenus)
  .add(dashboardDemoComponentIconMenus)
  .add(dashboardDemoComponentBreakPointMenus)
  .add(dashboardDemoComponentFlexMenus)

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
