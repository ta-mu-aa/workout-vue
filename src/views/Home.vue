<template>
  <div class="home">
  <v-container>
    <v-app id="inspire">
      <v-row>
        <v-date-picker
          width="400"
          v-model="value"
          locale="jp-ja"
          reactive="reactive"
          :day-format="date => new Date(date).getDate()">
        </v-date-picker>
       <router-link :to="{name:'Form' }">メニューを追加</router-link>
      </v-row>
    </v-app>
  </v-container>
  <Record/> 
  </div>
</template>

<script>
// @ is an alias to /src

import Record from '@/components/Record'
export default {
  components: {
    Record
  },
  data(){
    return{
      picker: new Date().toISOString().substr(0, 10),
      value:'',
    }
  },
}
</script>
