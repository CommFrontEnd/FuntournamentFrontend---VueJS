<template>
  <div class="mdl-layout__drawer mdl-color--white mdl-color-text--blue-grey-50">
    <header class="">

    </header>
    <nav class="mdl-navigation mdl-color--white">
        <router-link :to="{name: 'home'}" class="mdl-navigation__link" href="">
          <i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">
            dashboard
          </i>
          Accueil
        </router-link>
        <router-link :to="{name: 'diagram'}" class="mdl-navigation__link" href="">
          <i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">
            dashboard
          </i>
          Diagram
        </router-link>
        <div class="menu-separator"></div>
    </nav>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'app-menu',
    created(){
    },
    components : {},
    computed: mapGetters([
      'userPicture'
    ]),
    methods: mapActions([
    ]),
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu-separator{
    height : 1px;
    background-color: #f5f5f5;
  }
</style>
