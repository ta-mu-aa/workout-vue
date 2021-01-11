<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="6"
          md="6"
        >
          <v-text-field
            v-model="value"
            label="menu"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="6"
          md="6"
        >
          <v-text-field
            label="weight"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="6"
          md="6"
        >
          <v-text-field
            label="rep"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="6"
          md="6"
        >
          <v-text-field
            label="sets"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn small color="info" :to="{name: 'Home'}">cancel</v-btn>
    </v-container>
    {{value}}
  </v-form>
</template>

<script>
  export default {
    name: 'Form',
    data(){
      return{
        value:'',

      }
    }
}
    
</script>

<style>
</style>
