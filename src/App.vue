<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <app-header></app-header>
    <app-menu></app-menu>
    <main class="mdl-layout__content mdl-color--grey-100">
      <div class="mdl-grid">
        <router-view></router-view>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppMenu from './AppMenu.vue'
  import AppFooter from './AppFooter.vue'

  export default {
    name: 'app',
    components: {AppMenu, AppHeader, AppFooter},
    created(){
    }
  }
</script>

<style>
  @import "../node_modules/material-design-icons/iconfont/material-icons.css";
  @import "../node_modules/material-design-lite/material.min.css";

</style>
