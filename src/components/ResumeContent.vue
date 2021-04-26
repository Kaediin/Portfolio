<template>
  <div id="wrapper">
    <ResumeHeader/>
    <div id="wrapperContent">
      <ResumeBiography/>
      <ResumeTimelines :timelines="timelines"/>
    </div>
  </div>
</template>

<script>
import ResumeHeader from "@/components/ResumeHeader";
import ResumeBiography from "@/components/ResumeBiography";
import ResumeTimelines from "@/components/ResumeTimelines";

export default {
  name: "ResumeContent",
  components: {
    ResumeHeader,
    ResumeBiography,
    ResumeTimelines
  },
  props: {
    timelines: Array,
  }
}
</script>

<style scoped>
* {
  font-family: 'Quicksand', sans-serif;
  color: white;
}

html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  margin: 0;
  padding: 0;
}

#wrapper {
  background: #415871;
  min-height: 100vh;
}
</style>