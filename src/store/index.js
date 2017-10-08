/**
 * Created by C on 2017/9/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
Vue.use(Vuex)
// 是否开启严格模式
// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  mutations,
  state,
  actions,
  getters
  // strict: debug
})
