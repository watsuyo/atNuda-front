import Vuex from 'vuex'

export default {
  async nuxtServerInit(){
    const cookies = cookie.parse(req.headers['cookie'] || '');
    cookies ? commit('setUser', cookies.__session) : '';
  }
}