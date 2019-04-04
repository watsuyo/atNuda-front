import Vuex from 'vuex'
// import { isContext } from 'vm';


const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        isLogin: true,
        tabValue: 2,
        userName: '3isawa',
        position: { 'front': false, 'designer': false, 'back': false, 'infra': false, 'fullStack': false },
        status: { 'lookingForAJob': false, 'underRecruitmentOfItems': false }
      };
    },
    mutations: {
      tabValueMyPost: (state) => {
        state.tabValue = 1;
      },
      tabValueLike: (state) => {
        state.tabValue = 2;
      },
      isFront: (state) => {
        state.position.front === true ? state.position.front = false : state.position.front = true;
      },
      isDesigner: (state) => {
        state.position.designer === true ? state.position.designer = false : state.position.designer = true;
      },
      isBack: (state) => {
        state.position.back === true ? state.position.back = false : state.position.back = true;
      },
      isInfra: (state) => {
        state.position.infra === true ? state.position.infra = false : state.position.infra = true;
      },
      isFullStack: (state) => {
        state.position.fullStack === true ? state.position.fullStack = false : state.position.fullStack = true;
      },
      isLookingForAJob: (state) => {
        state.position.lookingForAJob === true ? state.position.lookingForAJob = false : state.position.lookingForAJob = true;
      },
      isUnderRecruitmentOfItems: (state) => {
        state.position.underRecruitmentOfItems === true ? state.position.underRecruitmentOfItems = false : state.position.underRecruitmentOfItems = true;
      }
    },
    actions: {
      changeToMyPost: (context) => {
        context.commit('tabValueLike');
      },
      changeToLike: (context) => {
        context.commit('tabValueMyPost');
      },
      changeIsFront: (context) => {
        context.commit('isFront');
      },
      changeIsDesigner: (context) => {
        context.commit('isDesigner');
      },
      changeIsFullStack: (context) => {
        context.commit('isFullStack');
      },
      changeIsBack: (context) => {
        context.commit('isBack');
      },
      changeIsInfra: (context) => {
        context.commit('isInfra');
      },
      changeIsLookingForAJob: (context) => {
        context.commit('isLookingForAJob');
      },
      changeIsUnderRecruitmentOfItems: (context) => {
        context.commit('isUnderRecruitmentOfItems');
      },
    }
  })
}

export default createStore;