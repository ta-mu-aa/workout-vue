<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon v-show="$store.state.login_user" v-on:click.stop="toggleSideMenu"></v-app-bar-nav-icon>
        <v-toolbar-title>My-WORKOUT</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <Navigation/>
    <v-main>
      <v-container d-md-flex justify-center>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import Navigation from './components/Navigation';
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Navigation,
  },
  created(){
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setLoginUser(user)
        const today = new Date().toISOString().substr(0, 10)
        this.fetchTraining(today)
        this.fetchTrainingDate()
        if(this.$router.currentRoute.name === 'Login'){this.$router.push({name: 'Home'},()=>{})}
      }else{
        this.deleteLoginUser()
        this.$router.push({name:'Login'},()=>{})
      }
    })
  },
  data(){
    return{
    }
  },
  methods:{
    ...mapActions(['toggleSideMenu','setLoginUser','logout','deleteLoginUser','fetchTraining','fetchTrainingDate']),
  }
}
</script>

<style sass-scoped>
.v-main{
  padding:0px;
}

</style>