<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    
    <v-app-bar-nav-icon v-show="$store.state.login_user" v-on:click.stop="toggleSideMenu"></v-app-bar-nav-icon>
    <v-toolbar-title>筋トレメモ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text v-on:click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <HelloWorld/>
      

    <v-main>
      <v-container d-md-flex justify-center >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import HelloWorld from './components/HelloWorld';
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  created(){
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setLoginUser(user)
        this.fetchTraining()
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
    ...mapActions(['toggleSideMenu','setLoginUser','logout','deleteLoginUser','fetchTraining']),
  }
}
</script>
