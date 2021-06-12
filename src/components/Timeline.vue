<template>
  <div class="containerTimeline">
    <div class="containerTimelineTitle">
      <div class="circleContainer">
        <div class="bigCircle"></div>
      </div>
      <h2>{{ timeline.title }}</h2>
    </div>
    <div class="timelineChild" v-for="subTimeline in timeline.subTimelines">
      <div class="circleContainer">
        <div class="smallCircle" v-if="subTimeline.isActive"></div>
        <div class="line"></div>
      </div>
      <div class="subTimelinePeriod"><p>{{ subTimeline.period }}</p></div>
      <div class="subTimelineFunction"><p>{{ subTimeline.function }}</p></div>
    </div>
    <div class="closingLine"></div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    timeline: Object
  }
}
</script>

<style scoped>


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .timelineChild{
    display: grid;
    grid: "circleContainer subTimelinePeriod subTimelineFunction"1fr/
    0 150px auto;
  }
  .containerTimelineTitle{
    border-bottom: 2px solid white;
  }
  h2{
    margin: 0;
  }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .containerTimelineTitle {
    display: flex;
    align-items: center;
  }

  .circleContainer {
    position: relative;
    width: 40px;
  }

  .bigCircle {
    background: white;
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }

  .line {
    background: white;
    width: 2px;
    height: 100%;
    margin: auto;
  }

  .smallCircle {
    position: absolute;
    background: white;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin: auto;
    top: 50%;
    bottom: 50%;
    left: 25%;
    right: 25%;
  }

  .subTimelinePeriod{
    display: flex;
    align-items: center;
  }

  h2 {
    margin: 0 20px;
  }

  .timelineChild {
    display: grid;
    grid: "circleContainer subTimelinePeriod subTimelineFunction"1fr/
  40px 175px 1fr;
  }

  .subTimelinePeriod {
    margin-left: 20px;
  }

  .closingLine{
    height: 2px;
    background: white;
    margin: 0 19px;
  }
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