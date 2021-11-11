<template>
  <div :class="`${classname}__body`" :style="bodyStyle">
    <d2-scroll class="body__scroll">
      <router-view/>
    </d2-scroll>
  </div>
  <d2-flex :class="`${classname}__header`" :style="headerStyle" dir="left" box="justify">
    <d2-flex class="header__column">
      <d2-flex class="header__button header__button--icon" tag="button" center>
        <d2-icon name="icon-park-outline:menu-unfold-one"/>
      </d2-flex>
    </d2-flex>
    <div class="header__column">
      <d2-admin-layout-header-aside-menu-header/>
    </div>
    <d2-flex class="header__column" dir="right">
      <d2-flex class="header__button header__button--text" tag="button" center>
        <span class="mr-2">Hello Admin</span>
        <a-avatar src="https://p3-passport.byteacctimg.com/img/user-avatar/e7130f55d45d06a8106c9dbd0e3f0c18~300x300.image"/>
      </d2-flex>
      <d2-flex class="header__button header__button--text" tag="button" center>
        Hello Admin
      </d2-flex>
      <d2-flex class="header__button header__button--icon" tag="button" center>
        <a-avatar src="https://p3-passport.byteacctimg.com/img/user-avatar/e7130f55d45d06a8106c9dbd0e3f0c18~300x300.image"/>
      </d2-flex>
      <d2-flex class="header__button header__button--icon" tag="button" center>
        <d2-icon name="icon-park-outline:application-menu"/>
      </d2-flex>
      <d2-flex class="header__button header__button--icon" tag="button" center>
        <d2-icon name="icon-park-outline:lock"/>
      </d2-flex>
      <d2-flex class="header__button header__button--icon" tag="button" center>
        <d2-icon name="icon-park-outline:message"/>
      </d2-flex>
    </d2-flex>
  </d2-flex>
  <d2-flex :class="`${classname}__aside`" :style="asideStyle" dir="top" box="justify">
    <d2-flex class="aside__header" center>
      Hello World
    </d2-flex>
    <d2-flex class="aside__body" block>
      <d2-scroll class="aside__scroll">
        <d2-admin-layout-header-aside-menu-aside/>
      </d2-scroll>
    </d2-flex>
    <d2-flex class="aside__footer" center>
      footer
    </d2-flex>
  </d2-flex>
</template>

<script>
import { makeNameByUrl, makeClassNameByUrl } from 'd2/utils/component.js'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { cssUnit } from 'd2/utils/css.js'
import { useCssPosition } from 'd2/use/css-position.js'
import { useD2AdminLayoutHeaderAsideStore } from 'd2/components/d2/admin/layout/header-aside/store/index.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const classname = makeClassNameByUrl(import.meta.url)

    const d2AdminLayoutHeaderAsideStore = useD2AdminLayoutHeaderAsideStore()
    const { fold } = storeToRefs(d2AdminLayoutHeaderAsideStore)
    
    const headerHeight = ref(46)
    const asideWidth = ref(200)

    const { style: bodyStyle } = useCssPosition(headerHeight, 0, 0, asideWidth)

    const headerStyle = computed(() => ({
      left: cssUnit(asideWidth)
    }))

    const asideStyle = computed(() => ({
      width: cssUnit(asideWidth)
    }))

    return {
      classname,
      bodyStyle,
      headerStyle,
      asideStyle
    }
  }
}
</script>
