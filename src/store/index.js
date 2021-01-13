import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"
import "firebase/app"
import  "firebase/auth"



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:false,
    login_user:null
  },
  mutations: {
    setLoginUser(state,user){
      state.login_user = user
    },
    deleteLoginUser(state){
      state.login_user= null
    },
    toggleSideMenu(state){
      state.drawer = !state.drawer
    },

  },
  actions: {
    setLoginUser({commit}, user){
      commit('setLoginUser',user)
    },
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    deleteLoginUser({commit}){
      commit('deleteLoginUser')
    },
    logout(){
      firebase.auth().signOut()
    },
    toggleSideMenu({commit}){
      commit('toggleSideMenu')
    }    
  },
  getters:{
    userName:state => state.login_user ? state.login_user.displayName:'',
    photoURL:state => state.login_user ? state.login_user.photoURL:''
  }
})
