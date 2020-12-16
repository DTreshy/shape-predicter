import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prediction: 'Figure',
    probability: 'Percent',
  },
  mutations: {
    setResponse(state, payload) {
      state.prediction = payload.prediction
      state.probability = payload.probability
    },
    clearResponse(state) {
      state.prediction = 'Figure'
      state.probability = 'Percent'
    }
  },
  actions: {},
  getters: {
    getProbability: state => state.probability,
    getPrediction: state => state.prediction,
  }
})
