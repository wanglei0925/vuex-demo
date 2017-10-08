/**
 * Created by C on 2017/9/11.
 */
// export default{
//   showHeader: ({commit}) => {
//     commit('showHeader')
//   }
// }
import * as types from './mutation-types'
export const selectPlay = function ({commit, state}, {list, index}) {
  // commit(types.SET_SEQUENCE_LIST, list)
  // commit(types.SET_PLAYLIST, list)
  // commit(types.SET_CURRENT_INDEX, index)
  // commit(types.SET_FUU_SCREEN, true)
  // commit(types.SET_PLAYING, true)
  commit(types.ACTION, false)
}
export const selectPause = function ({commit, state}, {list, index}) {
  // commit(types.SET_SEQUENCE_LIST, list)
  // commit(types.SET_PLAYLIST, list)
  // commit(types.SET_CURRENT_INDEX, index)
  // commit(types.SET_FUU_SCREEN, true)
  // commit(types.SET_PLAYING, true)
  commit(types.ACTION, true)
}
