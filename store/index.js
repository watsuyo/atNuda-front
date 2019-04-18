import Vue from 'vue'
import Vuex from 'vuex'
import portfolio from './modules/portfolio/store'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      portfolio
    }
  })
}

export default createStore
