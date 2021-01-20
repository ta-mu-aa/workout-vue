<template>
  <div class="home">
      <v-container>
        <v-app id="inspire">
          <v-row>
            <v-date-picker
              width="400"
              elevation="3"
              v-model="picker"
              locale="jp-ja"
              reactive="reactive"
              :day-format="date => new Date(date).getDate()"
              v-on:input="addmenu()">
            </v-date-picker>
          </v-row>
        </v-app>
      </v-container>
       <router-link :to="{name:'Form' ,  }" ><span v-on:click="addmenu()">メニューを追加</span></router-link>
    <Record/>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'
import Record from '@/components/Record';
export default {
  components:{
    Record,
  },
  data(){
    return{
      picker: new Date().toISOString().substr(0, 10),
    }
  },
  methods:{
    addmenu(){
      this.setDay(this.picker)
      this.fetchTraining(this.picker)
    },
    ...mapActions(['setDay','fetchTraining']),
  },
}
</script>

<style>
  .v-date-picker-table.v-date-picker-table--date > table > tbody tr td:nth-child(7) .v-btn__content {
    color:blue
}
  .v-date-picker-table.v-date-picker-table--date > table > tbody tr td:nth-child(1) .v-btn__content {
    color:red
}
</style>