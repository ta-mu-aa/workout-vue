<template>
  <v-app>
    <v-container text-center justify-center>
      <v-card width="500px" class="mx-auto mt-5">
        <v-card-title>
          <h3 class="display-1">サインイン</h3>
        </v-card-title>
        <v-card-text>
          <v-form v-on:submit="signIn" ref="form">
            <v-text-field  
            prepend-icon="mdi-account-circle" 
            label="メールアドレス" 
            v-model="email"
            :rules="emailRules"
            />
            <v-text-field 
            v-bind:type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock" 
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
            label="パスワード" 
            @click:append="showPassword = !showPassword"
            v-model="password" 
            :rules="passwordRules"
            />
              <v-card-actions class="justify-end">
                <v-btn color="info" type="submit" @click="errorhandler">サインイン</v-btn>
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
      emailRules:[
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',],
      passwordRules:[
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 6 characters',],
      showPassword:false,
      email:'',
      password:'',
    }
  },
  methods:{
    signIn(){
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
      .catch(function(){
        console.log('signInError')
      })
    },
    errorhandler () {
      this.$refs.form.validate()
    },
    ...mapActions(['login'])
  }
}
</script>