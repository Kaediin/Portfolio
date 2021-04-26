<template>
  <div class="content-header">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    name: String
  }
}
</script>

<style scoped>
h1 {
  text-decoration: underline;
  font-size: xx-large;
}
.content-header {
  display: flex;
  justify-content: center;
  flex: 0 1 auto;
  padding: 75px 0;
}
</style>