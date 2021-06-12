<template>
  <router-view/>
</template>

<script>
import {onBeforeMount} from 'vue'
import firebase from 'firebase'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const validPaths = ['/', '/Resume']

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!validPaths.includes(route.path)) {
          if (user){
            if (user.uid !== 'bd67jYo0oORfDMi8Up4BAAQRrSK2') {
              firebase.auth().signOut()
            }
          } else {
            router.replace('/')
          }
        }
        // else if (route.path === "/login") {
        //   if (user.uid === "") {
        //     router.replace('/Categories')
        //   } else {
        //     alert('You are not whitelisted. Please contact Kaedin Schouten')
        //     firebase.auth().signOut()
        //   }
        // }
      })
    })
  }
}
</script>

<style>
body {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

* {
  font-family: 'Quicksand', sans-serif;
  color: white;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
</style>
