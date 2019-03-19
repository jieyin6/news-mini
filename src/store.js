import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
       
        showToast: false,

        toastMsg: '',

        showAuth: false
    },

    mutations: {

        setToast(state, show) {
            state.showToast = show
        },

        setToastMsg(state, msg) {
            state.toastMsg = msg
        },
        
        toggleAuth(state) {
            state.showAuth = !state.showAuth
        }
    },

    strict: process.env.NODE_ENV !== 'production'
})

Vue.prototype.$store = store

export default store