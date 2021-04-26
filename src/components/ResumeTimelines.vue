<template>
  <div class="container">
    <div class="timelines" :key="timeline" v-for="timeline in timelines">
      <Timeline :timeline="timeline"/>
    </div>
  </div>
</template>

<script>
import Timeline from "@/components/Timeline";

export default {
  name: "ResumeTimelines",
  props: {
    timelines: Array
  },
  components: {
    Timeline
  }
}
</script>

<style scoped>
.timelines {
  width: 90%;
  margin: auto;
  padding: 50px 0 0 0;
}
.container{
  padding-bottom: 20px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1025px) {
  .timelines{
    width: 60%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
</style>