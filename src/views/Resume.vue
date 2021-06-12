<template>
  <div class="resume">
    <ResumeContent :timelines="timelines"/>
  </div>
</template>

<script>
import ResumeContent from "@/components/ResumeContent";
export default {
  name: 'Resume',
  components: {
    ResumeContent
  },
  data() {
    return {
      timelines: []
    }
  },
  created() {
    this.timelines = [
      {
        title: 'Experience',
        subTimelines: [
          {
            isActive: true,
            period: '01 2020 - Present',
            function: '(Java) Software developer at Eelloo'
          },
          {
            isActive: true,
            period: '06 2020 - Present',
            function: 'Android App Development at Reflex-Online (self-employed)'
          },
          {
            isActive: false,
            period: '05 2019 - 10 2019',
            function: 'Internship (Java) software developer at Eelloo'
          },
        ]
      },
      {
        title: 'Education',
        subTimelines: [
          {
            isActive: true,
            period: '09 2020 - Present',
            function: 'Artificial Intelligence at University of Applied Sciences Utrecht'
          },
          {
            isActive: false,
            period: '09 2018 - 12 2019',
            function: 'Software Development at intermediate vocational education (ROC) Almere-Buiten'
          },
          {
            isActive: false,
            period: '09 2014 - 06 2018',
            function: 'Mavo at Helen Parkhurst daltonschool in Almere'
          },
        ]
      },
      {
        title: 'Hobbies',
        subTimelines: [
          {
            isActive: true,
            period: 'Building apps',
            function: 'I like to experiment with new technologies and grow my knowledge with upcoming' +
                'software. For example I’ve developed an app that tracks all SpaceX rocket launches and a cookbook' +
                'web-app for my mother’s recipes.'
          },
          {
            isActive: true,
            period: 'Sports',
            function: 'I like to stay active. I do this by going to the gym, going for a run, or playing a soccer-match.'
          },
        ]
      },
    ]
  }
}
</script>
