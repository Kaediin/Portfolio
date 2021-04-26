<template>
  <div id="headerContainer">
    <div id="headerLeft">
      <h1>Kaedin Schouten</h1>
      <p>Software Developer<br><span style="font-size: small;color: darkgray">Student Artificial Intelligence</span></p>
      <br>
      <table>
        <tr>
          <td><b>Phone</b></td>
          <td>+31 46 44 60 75</td>
        </tr>
        <tr>
          <td><b>Email</b></td>
          <td>skaedin@gmail.com</td>
        </tr>
        <tr>
          <td><b>KVK</b></td>
          <td>80897800</td>
        </tr>
      </table>
    </div>
    <div id="headerRight">
      <img src="@/assets/profile_picture.jpg" alt="profile picture">
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeHeader",
}
</script>

<style scoped>
* {
  font-family: 'Quicksand', sans-serif;
  color: white;
}

h1, p{
  margin: 0;
  padding: 0;
}
td{
  padding: 0 10px 0 0;
}

img {
  height: 200px;
  border: 4px solid white;
  border-radius: 100%;
}

#headerContainer{
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b242f;
  padding: 0 5%;

}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  img{
    height: 150px;
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
  #headerContainer{
    padding: 0 20%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
</style>