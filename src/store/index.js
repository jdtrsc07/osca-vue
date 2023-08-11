// store/index.js

const state = {
    authToken: '',
  }
  
  const mutations = {
    setAuthToken(state, token) {
      state.authToken = token
    },
  }
  
  export default {
    state,
    mutations,
    actions: {
      // export the setAuthToken action
      setAuthToken(context, token) {
        context.commit('setAuthToken', token)
      }
    }
  }
  