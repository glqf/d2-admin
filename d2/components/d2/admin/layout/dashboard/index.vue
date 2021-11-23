<template>
  <!-- body -->
  <div class="layout__body">
    <d2-scroll class="body__scroll">
      <router-view/>
    </d2-scroll>
  </div>
  <!-- header -->
  <d2-flex class="layout__header" dir="left" box="justify">
    <d2-flex class="header__button-group">
      <d2-flex class="header__button header__button--icon" tag="button" @click="collapsedToggle" center>
        <d2-icon :name="collapseIcon"/>
      </d2-flex>
    </d2-flex>
    <d2-admin-layout-dashboard-menu-header/>
    <d2-flex class="header__button-group" dir="right">
      <d2-admin-layout-dashboard-header-action-user/>
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
  <!-- side -->
  <d2-flex class="layout__side" dir="top">
    <d2-scroll class="side__scroll">
      <div class="side__container">
        <d2-admin-layout-dashboard-menu-side/>
      </div>
    </d2-scroll>
  </d2-flex>
  <!-- logo -->
  <div class="layout__logo">
    logo
  </div>
</template>

<script>
import { makeNameByUrl, makeClassNameByUrl } from 'd2/utils/component.js'
import { storeToRefs } from 'pinia'
import { useD2AdminLayoutDashboardStore } from 'd2/components/d2/admin/layout/dashboard/store/index.js'
import { useD2AdminUserStore } from 'd2/store/user.js'

export default {
  name: makeNameByUrl(import.meta.url),
  setup () {
    const classname = makeClassNameByUrl(import.meta.url)

    const d2AdminLayoutDashboardStore = useD2AdminLayoutDashboardStore()
    const { collapsedToggle } = d2AdminLayoutDashboardStore
    const {
      collapsed,
      collapseIcon
    } = storeToRefs(d2AdminLayoutDashboardStore)
    
    const d2AdminUserStore = useD2AdminUserStore()
    const {
      userAvatar,
      userName
    } = storeToRefs(d2AdminUserStore)

    return {
      classname,
      userAvatar,
      userName,
      collapsed,
      collapseIcon,
      collapsedToggle
    }
  }
}
</script>
