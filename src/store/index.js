import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"





Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:false,
    login_user:null,
    trainingMenu:[],
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
    addTrainingMenu(state,{id,menu}){
      menu.id = id
      state.trainingMenu.push(menu)
    },
  },
  actions: {
    setLoginUser({commit}, user){
      commit('setLoginUser',user)
    },
    fetchTraining({getters, commit}){
      firebase.firestore().collection(`users/${getters.uid}/training`).get().then(snapshot => {
        snapshot.forEach(doc => commit('addTrainingMenu', {id: doc.id, menu:doc.data()}))
      })
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
    },
    addTrainingMenu({getters,commit}, menu){
      if(getters.uid){ firebase.firestore().collection(`users/${getters.uid}/training`).add(menu).then(doc => {
        commit('addTrainingMenu', {id:doc.id,menu})
      })
      }
    }    
  },
  getters:{
    userName:state => state.login_user ? state.login_user.displayName:'',
    photoURL:state => state.login_user ? state.login_user.photoURL:'',
    uid: state => state.login_user ? state.login_user.uid : null
  }
})
