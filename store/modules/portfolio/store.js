const state = {
  isLogin: true,
  tabValue: 2,
  userName: '3isawa',
  positions: [],
  statuses: [],
  orderStatusIndex: 'new',
  portfolioPageCount: 0
}
const mutations = {
  tabValueMyPost: (state) => {
    state.tabValue = 1
  },
  tabValueLike: (state) => {
    state.tabValue = 2
  },
  addPosition: (state, payload) => {
    state.positions.push(payload.position)
  },
  removePosition: (state, payload) => {
    const index = payload.positions.indexOf(payload.position)
    if (index >= 0) {
      state.positions.splice(index, 1)
    }
  },
  addStatus: (state, payload) => {
    state.statuses.push(payload.status)
  },
  removeStatus: (state, payload) => {
    const index = payload.statuses.indexOf(payload.status)
    if (index >= 0) {
      state.statuses.splice(index, 1)
    }
  },
  setPortfolioPageCount: (state, payload) => {
    state.portfolioPageCount = payload.pageNum
  }
}
const actions = {
  changeToMyPost: (context) => {
    context.commit('tabValueLike')
  },
  changeToLike: (context) => {
    context.commit('tabValueMyPost')
  },
  addPositionAction: (context, payload) => {
    context.commit('addPosition', payload)
  },
  removePositionAction: (context, payload) => {
    context.commit('removePosition', payload)
  },
  addStatusAction: (context, payload) => {
    context.commit('addStatus', payload)
  },
  removeStatusAction: (context, payload) => {
    context.commit('removeStatus', payload)
  },
  setPortfolioPageCountAction: (context, payload) => {
    context.commit('setPortfolioPageCount', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
