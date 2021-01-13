<template>
  <div class="home">
  <v-container>
    <v-app id="inspire">
      <v-row justify="center">
        <v-date-picker
          width="400"
          v-model="value"
          locale="jp-ja"
          reactive="reactive"
          :day-format="date => new Date(date).getDate()">
        </v-date-picker>
       <router-link to="/form">メニューを追加</router-link>
       <!-- <router-link to="{name: 'Form'}">ff</router-link> -->
      
      </v-row>
    </v-app>
  </v-container> 
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data(){
    return{
      picker: new Date().toISOString().substr(0, 10),
      value:'',
    }
  },
}
</script>
