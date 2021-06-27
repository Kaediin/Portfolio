<template>
  <div class="content-tile hvr-grow" @click="$emit('show-details', project.id)">
    <div class="content-tile-title">
      <h3>{{ project.projectType }}</h3>
    </div>
    <div class="content-tile-img">
      <img :src="require('@/assets/'+project.img)" alt="">
    </div>
    <div class="content-tile-softwares">
      <div :key="software" v-for="software in project.softwares">
        <p class="content-tile-software">{{ software }}</p>
      </div>
    </div>
    <div class="content-tile-container-divider">
      <hr class="content-tile-divider">
    </div>
    <div class="content-tile-container-description">
      <p>{{ project.descriptionShort }}</p>
    </div>
    <div class="content-tile-container-button-links">
      <div :key="button" v-for="button in project.buttons">
        <div class="content-tile-button">
          <img @click="openLink(button.buttonUrl)" :src="require('@/assets/'+button.imgPath+'')" width="50"
               height="50" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object
  },
  methods: {
    openLink(url) {
      window.open(url)
    }
  }
}
</script>

<style scoped>
.hvr-grow {
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  cursor: pointer;
  transform: scale(1.1);
}

.content-tile {
  background: #00806f;
  width: 350px;
  border-radius: 20px;
  margin: 25px;
  box-shadow: 0 7px 5px -2px black;
  display: flex;
  flex-direction: column;
}

.content-tile-title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10%;
  height: 20%;
  font-size: 100%;
}

.content-tile-container-description {
  margin: auto;
  width: 80%;
}

.content-tile-button {
  background-color: #004d42;
  padding: 0;
  margin: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.content-tile-container-button-links {
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}

.content-tile-softwares {
  padding-top: 10%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.content-tile-software {
  font-weight: bold;
  margin: 8px 0;
}

.content-tile-title h3 {
  text-align: center;
  color: white;
  padding: 0;
  margin: 0;
}

.content-tile-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-tile-img img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.content-tile-container-divider {
  display: flex;
  justify-content: center;
}

.content-tile-divider {
  width: 80%;
  background-color: white;
}
</style>