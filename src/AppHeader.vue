<template>
  <header class="mdl-layout__header mdl-color--light-blue-900 mdl-color-text--grey-100">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Funtournament</span>
      <div class="mdl-layout-spacer"></div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" id="search">
          <label class="mdl-textfield__label" for="search">Enter your query...</label>
        </div>
      </div>
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
        <i class="material-icons">more_vert</i>
      </button>
      <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
        <li class="mdl-menu__item">Mentions légales</li>
      </ul>
    </div>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'app-header',
    created(){

    },
    components : {},
    computed: mapGetters([
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

</style>
