import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        state: () => {
            return {
                isLogin: false,
                tabValue: 1
            };
        }
    })
}

export default createStore;

// export const state = () => ({
//     islogin: false,
// });

// export const getters = {
//     islogin (state) {
//         return state.islogin;
//     }
// };

// export const mutations = {
// };

// export const actions = {
    
// };
