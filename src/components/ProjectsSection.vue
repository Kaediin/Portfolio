<template>
  <section class="section" id="section-2">
    <Header name="Projects"/>
    <div id="content-projects-container-tiles">
      <div :key="project.id" v-for="project in projects">
        <Project :project="project"/>
      </div>
    </div>
  </section>
</template>

<script>
import Project from "@/components/Project";
import Header from "@/components/Header";

export default {
  name: "ProjectsSection",
  props: {
    projects: Array
  },
  components: {
    Project,
    Header
  }
}
</script>

<style scoped>

div#content-projects-container-tiles {
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
}
</style>