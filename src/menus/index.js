import { Menu, menuValue } from 'd2-admin/utils/menu.js'

export const menusAside = menuValue([
  new Menu({ title: '演示', icon: 'fluent:phone-vertical-scroll-24-filled' })
    .add(
      new Menu({ title: '文档' })
        .scope('/dashboard/document')
        .add(new Menu({ title: 'doc-1', url: '/page1' }))
        .add(new Menu({ title: 'doc-2', url: '/page2' }))
        .add(new Menu({ title: 'doc-3', url: '/page3' }))
    )
    .add(
      new Menu({ title: '组件' })
        .scope('/dashboard/demo/component')
        .add(new Menu({ title: '滚动容器', icon: 'fluent:phone-vertical-scroll-24-filled', url: '/scrollbar' }))
    )
])
