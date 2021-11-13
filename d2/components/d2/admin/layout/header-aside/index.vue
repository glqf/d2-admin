<template>
  <div class="layout__body" :style="bodyStyle">
    <d2-scroll class="body__scroll">
      <router-view/>
    </d2-scroll>
  </div>
  <d2-flex class="layout__header" :style="headerStyle" dir="left" box="justify">
    <d2-flex class="header__button-group">
      <d2-flex class="header__button header__button--icon" tag="button" center>
        <d2-icon name="icon-park-outline:menu-unfold-one"/>
      </d2-flex>
    </d2-flex>
    <d2-admin-layout-header-aside-menu-header/>
    <d2-flex class="header__button-group" dir="right">
      <d2-flex class="header__button header__button--text" tag="button" center>
        {{ userName }}
      </d2-flex>
      <d2-flex class="header__button header__button--icon" tag="button" center>
        <a-avatar size="small" :src="userAvatar"/>
      </d2-flex>
      <d2-flex class="header__button header__button--text" tag="button" center>
        <span class="mr-2">{{ userName }}</span>
        <a-avatar size="small" :src="userAvatar"/>
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
  <d2-flex class="layout__aside" :style="asideStyle" dir="top" box="justify">
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
import { useD2AdminUserStore } from 'd2/store/user.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const classname = makeClassNameByUrl(import.meta.url)

    const d2AdminLayoutHeaderAsideStore = useD2AdminLayoutHeaderAsideStore()
    const { fold } = storeToRefs(d2AdminLayoutHeaderAsideStore)
    
    const d2AdminUserStore = useD2AdminUserStore()
    const { userAvatar, userName } = storeToRefs(d2AdminUserStore)

    const headerHeight = ref(50)
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
      asideStyle,
      userAvatar,
      userName
    }
  }
}
</script>
