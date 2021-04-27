<template>
  <div class="containerDetails">
    <h1>{{ project.projectType }}</h1>
    <div class="modal-header">
      <div>
        <p>{{ project.descriptionLong }}</p>
        <div class="detailsSoftwares">
          <p><b>Software/Technologies used</b></p>
          <ul>
            <li v-for="software in project.softwares">{{software}}</li>
          </ul>
        </div>
      </div>
      <img :src="require('@/assets/'+project.img)" alt="">
    </div>
    <div class="closeDetails"><p class="closeDetailsButton">Close</p></div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetails",
  props: {
    project: Object,
    projects: Array
  }
}
</script>

<style scoped>

.modal-header {
  display: flex;
  justify-content: space-evenly;

}

.modal-header p {
  padding-right: 50px;
}

.modal-header img {
  width: 192px;
  height: 192px;
  border-radius: 100%;
  margin-right: 50px;
}
.closeDetails{
  display: flex;
  justify-content: flex-end;
}
.closeDetails p{
  margin: 0;
  padding: 10px;
  background: white;
  color: #00806f;
  border-radius: 10px;
  width: min-content;
  cursor: pointer;
  box-shadow: 0 5px 5px -2px black;
}

</style>