<template>
  <v-data-table
      :headers="headers"
      :items="training" 
    >
    <template v-slot:[`item.action`]="{ item }">
      <span>
        <router-link :to="{ name: 'Form', params: { training_id: item.id }}">
          <v-icon small class="mr-2">fas fa-edit</v-icon>
        </router-link>
      </span>
    </template>
  </v-data-table>
</template>


<script> 
export default {
  created(){
    this.training = this.$store.state.trainingMenu
  },
  data () {
    return {
      headers: [
        {
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '種目', value: 'menu' , sortable:false},
        { text: '回数', value: 'reps' , sortable:false},
        { text: '重量 (kg)', value: 'weight' , sortable:false},
        { text: 'セット数 ', value: 'sets', sortable:false },
        { text: '編集' , value:'action', sortable:false },

      ],
      training: [],
    }
  },
}
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>

