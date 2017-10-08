import * as types from './mutation-types'
const matutions = {
  [types.SET_SINGER](state) {
    state.singer++
  },
  [types.DEC_NUM](state) {
    state.singer--
  },
  [types.HTT](state, htt) {
    state.htt = htt
  },
  [types.ACTION](state, flag) {
    state.fullshow = flag
  },
  play(state) {
    state.singer = state.singer + 2
  }
}
export default matutions
