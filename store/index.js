import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common/store'
import paging from './modules/paging/store'

// import { isContext } from 'vm'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      common,
      paging
    }
  })
}

export default createStore
