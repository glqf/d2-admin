import { Menu } from 'd2/utils/menu.js'

export const menus = [
  new Menu('演示')
    .icon('fluent:phone-vertical-scroll-24-filled')
    .add(
      new Menu('文档')
        .scope('/dashboard/document')
        .add([
          new Menu('doc-1').url('/page1'),
          new Menu('doc-2').url('/page2'),
          new Menu('doc-3').url('/page3')
        ])
    )
    .add(
      new Menu('组件')
        .add(
          new Menu('滚动容器')
            .scope('/dashboard/demo/component/scroll')
            .add(new Menu('基础').url('/base').icon('fluent:phone-vertical-scroll-24-filled'))
        )
        .add(
          new Menu('svg 图标')
            .scope('/dashboard/demo/component/svg')
            .add(new Menu('基础').url('/base'))
        )
        .add(
          new Menu('断点组件')
            .scope('/dashboard/demo/component/break-point')
            .add(new Menu('base').url('/base'))
            .add(new Menu('data').url('/data'))
            .add(new Menu('slot').url('/slot'))
        )
        .add(
          new Menu('flex 布局')
            .scope('/dashboard/demo/component/flex')
            .add(new Menu('display').url('/display'))
            .add(new Menu('nesting').url('/nesting'))
            .add(new Menu('self').url('/self'))
            .add(new Menu('wrap').url('/wrap'))
            .add(new Menu('center').url('/center'))
            .add(new Menu('grow').url('/grow'))
            .add(new Menu('order').url('/order'))
            .add(new Menu('content').url('/content'))
            .add(new Menu('layout').url('/layout'))
            .add(new Menu('playground').url('/playground'))
            .add(new Menu('tag').url('/tag'))
            .add(new Menu('base').url('/base'))
        )
    )
    .value()
]

console.log('menus', menus)
