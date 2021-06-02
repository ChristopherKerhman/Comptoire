import { createStore } from 'vuex'

export default createStore({
  state: {
    panierClient: 0,
    commande: []
  },
  mutations: {
    addP (state, payload) {
      state.panierClient = payload
    },
    addPC (state, payload) {
      state.commande = payload
    }
  },
  actions: {
    MAJPanier (context, payload) {
      context.commit('addP', payload.panierClient)
      context.commit('addPC', payload.commande)
    }
  },
  modules: {
  }
})
