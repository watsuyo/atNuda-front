import Vuex from 'vuex'
// import { isContext } from 'vm';


const createStore = () => {
    return new Vuex.Store({
        state: () => {
            return {
                isLogin: true,
                tabValue: 2
            };
        },
        mutations: {
            changeToMyPost: (state) => {
                console.log('bbb');
                state.tabValue = 1;
            },
            changeToLike: (state) => {
                console.log('ddd');
                state.tabValue = 2;
            },
        },
        actions: {
            tabValueMyPost: (context) => {
                console.log('aaa');
                context.commit('changeToMyPost');
            },
            tabValueLike: (context) => {
                console.log('ccc');
                context.commit('changeToLike');
            },
        }
    })
}

export default createStore;