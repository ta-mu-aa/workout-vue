<template>
  <v-form>
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
      <v-btn small color="info" :to="{name: 'Home'}" v-on:click.stop="reset">cancel</v-btn>
      <v-btn color="info" class="ml-2" v-on:click.stop="submit">保存</v-btn>
    </v-container>
  </v-form>
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
        console.log(this.menu)
        this.$router.push({ name: 'Home'})
        this.training = {}
      },
      reset(){
        this.training = {}
        console.log('ddddd')
      },
      ...mapActions(['addTrainingMenu','updateTraining','setDay'])
    }
  }
    
</script>

<style>
</style>
