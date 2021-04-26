<template>
  <div id="navbar">
    <div id="containerListItems">
      <ul>
        <li @click="$emit('scroll-to', 'landingpage')" id="section-0" class="">Home</li>
        <li @click="$emit('scroll-to', 'about-me')" id="section-1">About me</li>
        <li @click="$emit('scroll-to', 'projects')" id="section-2">Projects</li>
        <li @click="$emit('scroll-to', 'contact')" id="section-3">Contact</li>
      </ul>

      <ul>
        <li @click="$emit('lang', 'NL')">NL</li>
        |
        <li @click="$emit('lang', 'EN')">EN</li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "NavBarSection",
  methods: {}
}

$(document).ready(function () {
  window.onscroll = function () {
    navbarSticky()
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function navbarSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
})

</script>

<style scoped>
.active{
  color: #e31b6d;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

#navbar {
  background: #131920;
  padding: 5px;
  overflow: hidden;
}

ul {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  color: white;
  cursor: pointer;
  margin: 10px;
}

li:hover {
  text-decoration: none;
  color: #e31b6d;
  transition: 0.3s;
}

#containerListItems {
  display: flex;
  justify-content: space-between;
  width: 65%;
  margin: auto;
}
</style>