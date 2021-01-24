<template>
  <v-app>
    <v-container text-center justify-center >
      <v-layout row wrap  align-content="center">
        <v-flex xs12 mt-4>
          <v-btn  v-on:click="login">Googleアカウントでログイン</v-btn>
        </v-flex> 
      </v-layout>
    </v-container>
    <v-container text-center justify-center>
      <v-card width="500px" class="mx-auto mt-5">
        <v-card-title>
          <h3 class="display-1">ログイン</h3>
        </v-card-title>
        <v-card-text>
          <v-form v-on:submit.prevent="addmail">
            <v-text-field  
            prepend-icon="mdi-account-circle" 
            label="ユーザ名" 
            v-model="email"
            />
            <v-text-field 
            v-bind:type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock" 
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
            label="パスワード" 
            @click:append="showPassword = !showPassword"
            v-model="password" 
            />
              <v-card-actions>
                <v-btn color="info" type="submit" >ログイン</v-btn>
              </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
import firebase from "firebase"
import "firebase/auth";
export default{
  data(){
    return{    
      showPassword:false,
      email:'',
      password:'',
    }
  },
  methods:{
    addmail(){
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
      .catch(function(){
        console.log("error")
      })
    },
    ...mapActions(['login'])
  }
}
</script>
