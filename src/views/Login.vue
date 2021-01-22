<template>
<v-container text-center justify-center >
  <v-layout row wrap  align-content="center">
    <v-flex xs12>
      <h1>My-WORKOUT</h1>
      <p>ご利用の方は、Googleアカウントでログインしてください。</p>
    </v-flex>

    <v-flex xs12 mt-5>
      <v-btn color='info' v-on:click="login">Googleアカウントでログイン</v-btn>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default{
  data(){
    return{    
    }
  },
  methods:{
    ...mapActions(['login'])
  }
}
</script>
