import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import 'firebase/app'


Vue.config.productionTip = false




  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  if(!firebase.apps.length){
    const firebaseConfig = {
      apiKey: "AIzaSyCoApb1_Ey_i-rMrJihwaUce176sKBeWHM",
      authDomain: "my-workout-ce168.firebaseapp.com",
      projectId: "my-workout-ce168",
      storageBucket: "my-workout-ce168.appspot.com",
      messagingSenderId: "860552708070",
      appId: "1:860552708070:web:a5d00bb03622e4b5d12027",
      measurementId: "G-ZYGTKDXE7L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
    firebase.analytics();
  }
  


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
