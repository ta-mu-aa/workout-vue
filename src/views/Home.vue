<template>
  <div class="home">
    <v-container>
      <v-app id="inspire">
        <v-row justify="center" align="center">
          <v-date-picker
            width="400"
            elevation="3"
            locale="jp-ja"
            reactive="reactive"
            v-model="picker"
            v-on:input="addmenu()" 
            :day-format="date => new Date(date).getDate()"
            :events="arrayEvents"
            event-color="red"
            :disabled="isPush"
            >
              <v-row class="float-right">
              </v-row>
              <router-link :to="{name:'Form'}" >
                <v-btn normal color="info" fab small><v-icon dark>mdi-plus</v-icon></v-btn>
              </router-link>
          </v-date-picker>
          <Record/>
        </v-row>
      </v-app>
    </v-container>
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
      arrayEvents:null,
      isPush: false,
    }
  },
  mounted(){
    const done = this.$store.state.doneDate
    this.arrayEvents = done
  },
  methods:{
    addmenu(){
      this.setDay(this.picker)
      this.resetMenu(this.picker)
      this.fetchTraining(this.picker)

      if(this.isPush) return
      this.isPush = true
      this.Pushed().then(() => {this.isPush = false})
    },
    Pushed(){
     return new Promise((resolve) => {
       setTimeout(() => {
         console.log('push')
         resolve()},300)
     })
    },
    ...mapActions(['setDay','fetchTraining','resetMenu','fetchTrainingDate']),
  },
}
</script>

<style sass-scoped>
a {
  text-decoration: none;
}

.v-date-picker-table.v-date-picker-table--date > table > tbody tr td .v-btn__content{
  font-size:18px;
  font-weight:normal;
}

 td:nth-child(7) .v-btn__content {
  color:blue;
}
.v-date-picker-table.v-date-picker-table--date > table > tbody tr td:nth-child(1) .v-btn__content {
  color:red
}
</style>
