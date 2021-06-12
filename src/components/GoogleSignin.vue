<template>
  <div class="login">
    <h1>Login</h1>
    <div class="googleSignIn" @click="socialLogin">
      <img :src="require('@/assets/google.jpg')" width="50" height="50">
      <p><b>Sign in with Google</b></p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
name: "GoogleSignin",
  methods: {
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.setCustomParameters({prompt: 'select_account'});

      firebase.auth().signInWithPopup(provider).then((result) => {
        this.$router.replace('/Console')
      }).catch((err) => {
        console.log(err.message)
      })
    }
  }
}
</script>

<style scoped>
h1 {
  padding: 0;
  margin: 20px 0;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 200px;
}

.googleSignIn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 250px;
  border-radius: 5px;
  cursor: pointer;
}

b{
  color: black !important;
}
</style>