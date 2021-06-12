<template>
  <div class="container">
    <GoogleSignin/>
  </div>
</template>

<script>
import GoogleSignin from "@/components/GoogleSignin";
export default {
name: "Admin",
  components: {GoogleSignin}
}
</script>

<style scoped>
.container{
  background: #131920;
  height: 100vh;
}
</style>