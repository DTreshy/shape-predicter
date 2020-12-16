import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prediction: 'Triangle',
    probability: '98.9%',
  },
  mutations: {
    setResponse(state, payload) {
      state.prediction = payload.prediction
      state.probability = payload.probability
    },
    clearResponse(state) {
      state.prediction = ''
      state.probability = ''
    }
  },
  actions: {},
  getters: {
    getProbability: state => state.probability,
    getPrediction: state => state.prediction,
  }
})
