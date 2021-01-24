import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:false,
    login_user:null,
    trainingMenu:[],
    trainingDay:null,
    doneDate:[]
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
    updateTraining(state, {id , menu}){
      const index = state.trainingMenu.findIndex(menu => menu.id === id)

      state.trainingMenu[index] = menu
    },
    deleteTraining(state, {id}){
      const index = state.trainingMenu.findIndex(menu => menu.id === id)

      state.trainingMenu.splice(index,1)
    },
    setDay(state,picker){
      state.trainingDay = picker
    },
    resetMenu(state,{date}){
      const index = state.trainingMenu.filter(menu => menu.date === date )
      state.trainingMenu.splice(index)
    },
    doneDate(state,menu){
      const json = JSON.parse(JSON.stringify(menu))
      state.doneDate.push(json.menu.date)
    }
  },

  actions: {
    setLoginUser({commit}, user){
      commit('setLoginUser',user)
    },
    fetchTraining({getters, commit},date){
      firebase.firestore().collection(`users/${getters.uid}/training`).where("date","==",date).get()
      .then(snapshot => {snapshot.forEach(doc => commit('addTrainingMenu', {id: doc.id, menu:doc.data()}))
      })
    },
    fetchTrainingDate({getters,commit}){
      firebase.firestore().collection(`users/${getters.uid}/training`).get()
      .then(snapshot => {snapshot.forEach(doc => commit('doneDate', { menu:doc.data()}))
      })
    .catch(function(error) {
      console.log("Error getting documents",error)
    })
    },
    login(){
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
        commit('addTrainingMenu', {id: doc.id, menu})
      })
    }
    },
    updateTraining({getters,commit},{id,menu}){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/training`).doc(id).update(menu).then(() => {
          commit('updateTraining',{id, menu})
        })
      }
    },
    deleteTraining({getters,commit},{id}){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/training`).doc(id).delete().then(() => {
          commit('deleteTraining',{id})
        })
      }
    },
    setDay({commit},TrainingDay){
      commit('setDay',TrainingDay)
    },
    resetMenu({commit},date){
      commit('resetMenu',date)
    },

  },

  getters:{
    userName:state => state.login_user ? state.login_user.displayName:'',
    photoURL:state => state.login_user ? state.login_user.photoURL:'',
    uid: state => state.login_user ? state.login_user.uid : null,
    getTrainingId: state => id => state.trainingMenu.find(menu => menu.id === id),
  }
})
