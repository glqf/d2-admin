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
    <d2-admin-layout-dashboard-menu-header/>
    <d2-flex class="header__button-group" dir="right">
      <d2-flex class="header__button header__button--padding-text-left" tag="button" center>
        <span>{{ userName }}</span>
        <d2-flex class="is-square" center>
          <a-avatar size="small" :src="userAvatar"/>
        </d2-flex>
      </d2-flex>
      <d2-flex class="header__button header__button--padding-text" tag="button" center>
        Welcome, {{ userName }}
      </d2-flex>
      <d2-flex class="header__button header__button--icon" tag="button" center>
        <a-avatar size="small" :src="userAvatar"/>
      </d2-flex>
      <d2-flex class="header__button header__button--padding-text" tag="button" center>
        个人中心
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
  <d2-flex class="layout__side" :style="sideStyle" dir="top">
    <d2-flex class="side__header" grow="0" center>
      Hello World
    </d2-flex>
    <d2-flex class="side__body" grow="1" block>
      <d2-scroll class="side__scroll">
        <d2-admin-layout-dashboard-menu-side/>
      </d2-scroll>
    </d2-flex>
    <d2-flex class="side__footer" grow="0" block>
      <slot name="side-footer"/>
    </d2-flex>
  </d2-flex>
</template>

<script>
import { makeNameByUrl, makeClassNameByUrl } from 'd2/utils/component.js'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { cssUnit } from 'd2/utils/css.js'
import { useCssPosition } from 'd2/use/css-position.js'
import { useD2AdminLayoutDashboardStore } from 'd2/components/d2/admin/layout/dashboard/store/index.js'
import { useD2AdminUserStore } from 'd2/store/user.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const classname = makeClassNameByUrl(import.meta.url)

    const d2AdminLayoutDashboardStore = useD2AdminLayoutDashboardStore()
    // const { fold } = storeToRefs(d2AdminLayoutDashboardStore)
    
    const d2AdminUserStore = useD2AdminUserStore()
    const {
      avatar: userAvatar,
      name: userName
    } = storeToRefs(d2AdminUserStore)

    const headerHeight = ref(50)
    const sideWidth = ref(220)

    const { style: bodyStyle } = useCssPosition(headerHeight, 0, 0, sideWidth)

    const headerStyle = computed(() => ({
      left: cssUnit(sideWidth)
    }))

    const sideStyle = computed(() => ({
      width: cssUnit(sideWidth)
    }))

    return {
      classname,
      bodyStyle,
      headerStyle,
      sideStyle,
      userAvatar,
      userName
    }
  }
}
</script>
