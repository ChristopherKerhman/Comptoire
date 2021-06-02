import { createStore } from 'vuex'

export default createStore({
  state: {
    panierClient: 0,
    commande: [],
    coupeCreateurPerso: []
  },
  mutations: {
    addP (state, payload) {
      state.panierClient = payload
    },
    addPC (state, payload) {
      state.commande = payload
    },
    addPCP (state, payload) {
      state.coupeCreateurPerso = payload
    }
  },
  actions: {
    MAJPanier (context, payload) {
      context.commit('addP', payload.panierClient)
      context.commit('addPC', payload.commande)
    },
    MAJPanier2 (context, payload) {
      context.commit('addP', payload.panierClient)
      context.commit('addPCP', payload.coupeCreateurPerso)
    }
  },
  modules: {
  }
})
