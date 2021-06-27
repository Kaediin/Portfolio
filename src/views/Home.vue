<template>
  <div class="home">
    <LandingSection @scroll-to="scrollTo" id="landingpage"/>
    <NavBarSection @scroll-to="scrollTo" id="navbar"/>
    <AboutMeSection id="about-me"/>
    <ProjectsSection :projects="projects" id="projects"/>
    <ContactSection id="contact"/>
  </div>
</template>

<script>
import LandingSection from "@/components/LandingSection";
import NavBarSection from "@/components/NavBarSection";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default {
  name: 'Home',
  components: {
    LandingSection,
    NavBarSection,
    AboutMeSection,
    ProjectsSection,
    ContactSection
  },
  data() {
    return {
      projects: [],
      scrollPosition: null
    }
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id)
      element.scrollIntoView({behavior: 'smooth'})
    }
  },
  created() {
    this.projects = [
      {
        id: 1,
        projectType: "Android App",
        img: "ic-roommanager.png",
        softwares: [
          "Android",
          "XML",
          "Java | Kotlin"
        ],
        descriptionShort: "This Android-project is a simple app that displays the Reflex-Online web-application in an app, with added functionality like: LED-lights to show the booking-status, automatic reboots.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        buttons: [
          {
            imgPath: "ic-globe.png",
            buttonUrl: "https://www.reflex-online.com/"
          }
        ]
      },
      {
        id: 6,
        projectType: "Restaurant Website",
        img: "ic-williewong.png",
        softwares: [
          "VueJS",
          "JavaScript"
        ],
        descriptionShort: "A simple website for the restaurant chain Willie Wong in The Netherlands. This website is currently in the early stage of its development.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        buttons: [
          {
            imgPath: "ic-globe.png",
            buttonUrl: "https://williewong.nl/"
          }
        ]
      },
      {
        id: 5,
        projectType: "SpaceX Launch-Tracking App",
        img: "ic-spacex.png",
        softwares: [
          "Android",
          "XML",
          "Java | Kotlin"
        ],
        descriptionShort: "In this app you can stay up to date with all of the latest rocket-news regarding SpaceX. This app shows all the launches, its details, and way more. Currently also in development for I(PAD-)OS.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        buttons: [
          {
            imgPath: "ic-code.png",
            buttonUrl: "https://github.com/Kaediin/SpaceX-API-Kotlin"
          }
        ]
      },
      {
        id: 3,
        projectType: "Recipebook Web-App",
        img: "ic-recipebook.png",
        softwares: [
          "Django",
          "Python",
          "Google Firebase"
        ],
        descriptionShort: "This website is a recipebook application in which a user can create, update, read, and delete recipes. Each recipe has: method, ingredients, pictures, tags, and total time to make.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        buttons: [
          {
            imgPath: "ic-code.png",
            buttonUrl: "https://github.com/Kaediin/Recipebook"
          },
          {
            imgPath: "ic-globe.png",
            buttonUrl: "https://recipebook.kaedin.nl/"
          }
        ]
      },
      {
        id: 4,
        projectType: "Scavenger Hunt App",
        img: "ic-scavengerhunt.png",
        softwares: [
          "Android",
          "XML",
          "Java | Kotlin",
          "Google Firebase"
        ],
        descriptionShort: "With this app you easily setup a scavenger-hunt in which you can setup a quiz at each location. The app uses its GPS location to know if the user is in range of the target. This app is currently in beta-testing.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        buttons: [
          {
            imgPath: "ic-code.png",
            buttonUrl: "https://github.com/Kaediin/ScavengerHunt"
          }
        ]
      },
      {
        id: 2,
        projectType: "Portfolio Website",
        img: "ic-adnan.png",
        softwares: [
          "Django",
          "Python",
          "Google Firebase",
          "Javascript | jQuery"
        ],
        descriptionShort: "A simple portfolio-website that I've made for Adnan Jerbi. He has his own built-in admin-console on the website in which he can create, update, read, and delete content to keep his portfolio up-to-date.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        buttons: [
          {
            imgPath: "ic-globe.png",
            buttonUrl: "http://adnanjerbi.com"
          }
        ]
      }
    ]
  },
}
</script>

<style>
.active {
  color: #e31b6d;
}

input[type=submit], input[type=button], button {
  -webkit-appearance: none;
  cursor: pointer;
}

footer {
  background: #1b242f;
  height: 100px;
  display: flex;
  justify-content: center;
  line-height: 100px;
  align-content: center;
  text-align: center;
}

#landingpage {
  min-height: 100vh;
  background-size: 100% 100%;
}

#about-me {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#projects {
  min-height: 100vh;
  background: #253241;
  z-index: -1;
}

#navbar {
  z-index: 100;
}

#contact {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #2f3e51
}

</style>