<template>
  <v-container>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary width="250">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img v-if="photoURL" :src="photoURL">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{userName}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
// import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        items: [
          { title: 'トレーニングメモ', icon: 'mdi-menu' },
          { title: 'ログアウト', icon: 'mdi-menu'}

        ],
      }
      },
    computed:{
      ...mapGetters(['userName','photoURL']),
      // ...mapActions(['logout'])
    }
  }
</script>




<style>
</style>