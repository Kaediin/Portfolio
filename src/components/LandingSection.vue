<template>
  <div class="section" id="main-img"
       :style="{ backgroundImage: 'url(' + require('@/assets/background_original.jpg') + ')' }">
    <div id="centered-text-image"><p id="image-name">Kaedin Schouten</p>
      <p id="image-title">Software Developer</p>
      <div id="centered-image-buttons">
        <div class="centered-image-button-aboutme nav-button-main" @click="$emit('scroll-to', 'navbar')">
          <a id="centered-image-button-aboutme-link">About me</a>
          <img src="@/assets/arrow-white.png" alt="" width="20" height="20">
        </div>
        <router-link to="Resume">
          <div class="centered-image-button-resume nav-button-main">
            <a id="centered-image-button-resume-link">Curriculum Vitae</a>
            <img src="@/assets/arrow-white.png" alt="" width="20" height="20">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingSection",

}
</script>

<style scoped>
a{
  text-decoration: none;
}
/*Laptop / Desktop*/
/* START HOME */
div#main-img {
  height: 100vh;
  background: url("../assets/background_original.jpg") #131920 no-repeat;
  background-size: 100% 100%;
}

div#centered-text-image {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}

div#centered-image-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

.centered-image-button-aboutme {
  margin-right: 100px;
}

.nav-button-main {
  padding: 10px 20px 10px 20px;
  border: 1px solid white;
  cursor: pointer;
  display: flex;
}

.nav-button-main:hover {
  background: white;
  color: black;
  transition: 0.8s;
  border-radius: 15px;
}

.nav-button-main a {
  margin-right: 20px;

}

.nav-button-main:hover a {
  color: black;
  transition: 0.8s;
}

.centered-image-button-aboutme:hover img {
  filter: invert(100%);
  transform: rotate(90deg);
  transition: 0.8s;
}

.centered-image-button-resume:hover img {
  filter: invert(100%);
  transform: rotate(-45deg);
  transition: 0.8s;
}

.centered-image-button-aboutme a, .centered-image-button-resume a {
  text-decoration: none;
  color: white;
}

p#image-name {
  color: white;
  font-size: 250%;
}

p#image-title {
  font-weight: normal;
  font-size: 125%;
  color: white;
  text-align: center;
  margin-top: 1%;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .centered-image-button-aboutme{
    margin-right: 10px;
  }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1025px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
</style>