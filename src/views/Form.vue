<template>
  <v-form>
    <v-container>
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
      <v-btn small color="info" :to="{name: 'Home'}">cancel</v-btn>
      <v-btn color="info" class="ml-2" v-on:click.stop="submit">保存</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name: 'Form',
    data(){
      return{
        menu:{}
      }
    },
    methods:{
      submit(){
        this.addTrainingMenu(this.menu)
        this.$router.push({ name: 'Home'})
        this.training = {}
      },
      ...mapActions(['addTrainingMenu'])
    }
  }
    
</script>

<style>
</style>
