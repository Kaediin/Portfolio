<template>
  <section class="section" id="section-2">
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <ProjectDetails :projects="projects" :project="detailsProject"/>
      </div>
    </div>
    <Header name="Projects"/>
    <div id="content-projects-container-tiles">
      <div :key="project.id" v-for="project in projects">
        <Project :project="project"/>
      </div>
    </div>
    <div class="container-projects-github">
      <div class="content-projects-github hvr-grow" @click="openLink('https://github.com/Kaediin')">
        <p>For more projects, see my GitHub!</p>
        <img :src="require('@/assets/GitHub-logo-white.png')" alt="GitHub image" height="75"/>
      </div>
    </div>
  </section>
</template>

<script>
import Project from "@/components/Project";
import Header from "@/components/Header";
import ProjectDetails from "@/components/ProjectDetails";

export default {
  name: "ProjectsSection",
  props: {
    projects: Array,
    detailsProject: Object
  },
  data() {
    return {
      detailsProject: {
        id: 1,
        project: "Mobile App",
        img: "ic-roommanager.png",
        softwares: [
          "Android",
          "XML",
          "Java | Kotlin"
        ],
        descriptionShort: "This Android-project is a simple app that displays their web-application in an app with extra functions like: LED-lights for status.",
        descriptionLong: "This Android-project is a simple app that displays their web-application in an app with extra functions like: LED-lights for status.",
        buttons: [
          {
            imgPath: "ic-globe.png",
            buttonUrl: "https://www.reflex-online.com/"
          }
        ]
      }
    }
  },
  components: {
    Project,
    Header,
    ProjectDetails
  },
  methods: {
    showDetails(id) {
      this.detailsProject = this.projects[parseInt(id) - 1]
      var modal = document.getElementById("myModal");


      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("closeDetailsButton")[0];

      // When the user clicks the button, open the modal
      modal.style.display = "block";


      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }
    },
    openLink(url) {
      window.open(url)
    }
  }
}
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content, .content-projects-github {
  background-color: #00806f;
  border-radius: 10px;
  margin: auto;
  padding: 20px;
  width: 80%;
  box-shadow: 0 7px 5px -2px black;
}

div#content-projects-container-tiles {
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  flex-wrap: wrap;
}

.container-projects-github {
  padding: 50px 0;
}

.content-projects-github {
  display: flex;
  justify-content: center;
  width: max-content;
  align-items: center;
  cursor: pointer;
}

.hvr-grow {
  transform: translateZ(0);
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

@media only screen and (max-width: 450px){
  .content-projects-github img{
    height: 50px;
  }
  .container-projects-github{
    font-size: small;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  #content-projects-container-tiles {
    width: 60%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1400px) {
  .modal-content {
    width: 50%;
  }
}
</style>