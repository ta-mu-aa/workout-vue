<template>
<v-data-table
    :headers="headers"
    :items="training"
    :items-per-page="5"
    class="elevation-1" 
  >
  <template v-slot:items="props">
    <td class="text-xs-left">{{ props.item.menu }}</td>
    <td class="text-xs-left">{{ props.item.reps }}</td>
    <td class="text-xs-left">{{ props.item.weight }}</td>
    <td class="text-xs-left">{{ props.item.sets }}</td>
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
        { text: '種目', value: 'menu' },
        { text: '回数', value: 'reps' },
        { text: '重量 (kg)', value: 'weight' },
        { text: 'セット数 ', value: 'sets' },
      ],
      training: [],
    }
  },
}
</script>


