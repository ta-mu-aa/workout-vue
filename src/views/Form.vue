<template>
  <v-flex>
    <v-card>
      <v-card-text>
        <v-form lazy-validation>
          <v-container>
            {{$store.state.trainingDay}}
            <v-row>
              <v-col
                cols="6"
                md="3"
              >
                <v-text-field
               
                  label="menu"
                  required
                  v-model="menu.menu"
                ></v-text-field>
              </v-col>

              <v-col
                cols="6"
                md="3"
              >
                <v-text-field
                  label="weight"
                  required
                  v-model="menu.weight"
                ></v-text-field>
              </v-col>

              <v-col
                cols="6"
                md="3"
              >
                <v-text-field
                  label="rep"
                  required
                  v-model="menu.reps"
                ></v-text-field>
              </v-col>
              <v-col
                cols="6"
                md="3"
              >
                <v-text-field
                  label="sets"
                  required
                  v-model="menu.sets"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="float-right">
              <v-btn small color="info" class="ml-2" v-on:click.stop="submit">add</v-btn>
              <v-btn small  class="ml-2" :to="{name: 'Home'}" >cancel</v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name: 'Form',
    created(){
      if(!this.$route.params.training_id) return
    
      const training = this.$store.getters.getTrainingId(this.$route.params.training_id)
      if(training){
        
        this.menu = training
      }else{
        this.$router.push({name: ('Home')})
      }
    },
    data(){
      return{
        menu:{date:this.$store.state.trainingDay},
        
      }
    },
    methods:{
      submit(){
        if(this.$route.params.training_id){
          this.updateTraining({id: this.$route.params.training_id, menu: this.menu})
        }else{
          this.addTrainingMenu(this.menu)
        }
        this.$router.push({ name: 'Home'})
        this.training = {}
      },
      ...mapActions(['addTrainingMenu','updateTraining','setDay'])
    }
  }
    
</script>

<style>
</style>
