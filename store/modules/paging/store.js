const state = {
  portfolioPageCount: 15,
  tabValue: 15
}
const mutations = {
  setPortfolioPageCount: (state, payload) => {
    state.portfolioPageCount = payload.pageNum
  }
}
const actions = {
  setPortfolioPageCountAction: (context, payload) => {
    context.commit('setPortfolioPageCount', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
