<template>
  <div class="home">
    <LandingSection @scroll-to="scrollTo" id="landingpage" />
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
  data(){
    return{
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
        projectType: "Mobile App",
        img: "ic-roommanager.png",
        softwares: [
          "Android",
          "XML",
          "Java | Kotlin"
        ],
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        buttons: [
          {
            imgPath: "ic-globe.png",
            buttonUrl: "https://www.reflex-online.com/"
          }
        ]
      },
      {
        id: 2,
        projectType: "Website",
        img: "ic-adnan.png",
        softwares: [
          "Django",
          "Python",
          "Google Firebase",
          "Javascript | jQuery"
        ],
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",        buttons: [
          {
            imgPath: "ic-globe.png",
            buttonUrl: "http://adnanjerbi.com"
          }
        ]
      },
      {
        id: 3,
        projectType: "Website",
        img: "ic-recipebook.png",
        softwares: [
          "Django",
          "Python",
          "Google Firebase"
        ],
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",        buttons: [
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
        projectType: "Mobile App",
        img: "ic-scavengerhunt.png",
        softwares: [
          "Android",
          "XML",
          "Java | Kotlin",
          "Google Firebase"
        ],
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",        buttons: [
          {
            imgPath: "ic-code.png",
            buttonUrl: "https://github.com/Kaediin/ScavengerHunt"
          },
          {
            imgPath: "ic-playstore.png",
            buttonUrl: "https://comingsoon.com"
          }
        ]
      },
      {
        id: 5,
        projectType: "Mobile App",
        img: "ic-spacex.png",
        softwares: [
          "Android",
          "XML",
          "Java | Kotlin"
        ],
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",        buttons: [
          {
            imgPath: "ic-code.png",
            buttonUrl: "https://github.com/Kaediin/SpaceX-API-Kotlin"
          },
          {
            imgPath: "ic-playstore.png",
            buttonUrl: "https://comingsoon.com"
          }
        ]
      },
      {
        id: 6,
        projectType: "Mobile App",
        img: "ic-mclib.png",
        softwares: [
          "Android | IOS",
          "Flutter",
          "Dart",
          "Google Firebase"
        ],
        descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",
        descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus.",        buttons: [
          {
            imgPath: "ic-code.png",
            buttonUrl: "https://github.com/Kaediin/Flutter-CLib"
          },
          {
            imgPath: "ic-playstore.png",
            buttonUrl: "https://comingsoon.com"
          }
        ]
      }
    ]
  },
}
</script>

<style>
.active{
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

#landingpage{
  min-height: 100vh;
  background-size: 100% 100%;
}

#about-me {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#projects{
  min-height: 100vh;
  background: #253241;
  z-index: -1;
}
#navbar{
  z-index: 100;
}
#contact{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #2f3e51
}

</style>