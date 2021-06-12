import { createApp, use } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAoqSIY4591YQJBagKsKrDBTwO269nfa6s",
    authDomain: "portfolio-142e1.firebaseapp.com",
    projectId: "portfolio-142e1",
    storageBucket: "portfolio-142e1.appspot.com",
    messagingSenderId: "776290967601",
    appId: "1:776290967601:web:30fb5109d8f52f9086b510",
    measurementId: "G-BH7B3XNDHY"
};
firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
