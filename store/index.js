import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        state: () => {
            return {
                isLogin: false,
                tabValue: 1
            };
        },
        actions: () => {

        }
    })
}

export default createStore;