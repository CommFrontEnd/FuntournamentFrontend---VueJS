/**
 * Created by Alex on 19/02/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import counter from './modules/counter'
import hello from './modules/hello'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    counter,
    hello
  }
})
