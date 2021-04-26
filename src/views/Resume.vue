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
            function: 'Full-time Software developer at Eelloo'
          },
          {
            isActive: true,
            period: '06 2020 - Present',
            function: 'Android App Development at Reflex-Online'
          },
          {
            isActive: false,
            period: '05 2019 - 10 2019',
            function: 'Intern software developer at Eelloo'
          },
        ]
      },
      {
        title: 'Education',
        subTimelines: [
          {
            isActive: true,
            period: '09 2020 - Present',
            function: 'Artificial Intelligence at Hogeschool Utrecht'
          },
          {
            isActive: false,
            period: '09 2018 - 12 2019',
            function: 'Software Development MBO4 at ROC Almere Buiten'
          },
          {
            isActive: false,
            period: '09 2014 - 06 2018',
            function: 'Mavo at Helen Parkhurst daltonschool'
          },
        ]
      },
    ]
  }
}
</script>
