<template>
  <section class="section" id="section-1">
    <Header name="About me"/>
    <div id="content-about-pic">
      <img src="../assets/profile_picture.jpg" alt="">
    </div>
    <div id="content-about">
      <div id="content-about-text-mobile">
        <div class="typedtextMobile"><h2>Hello, my name is Kaedin Schouten</h2></div>
        <div class="typedtextMobile"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tincidunt magna non ex mattis cursus.
          Quisque efficitur dui et urna sagittis pharetra. In suscipit nisl semper venenatis mattis.
          Pellentesque mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tincidunt magna non ex mattis cursus.
          Quisque efficitur dui et urna sagittis pharetra. In suscipit nisl semper venenatis mattis.
          Pellentesque mollis<br><br>
          non eros ac facilisis. Ut consequat gravida dui a volutpat. Praesent facilisis vulputate
          pellentesque.

          Quisque efficitur dui et urna sagittis pharetra. In suscipit nisl semper venenatis mattis.
          Pellentesque mollis<br><br>
          vehicula lorem, ac semper sapien dapibus at. Aliquam erat volutpat. Cras eleifend aliquet magna
          quis pretium.
          Pellentesque sit amet est nec metus euismod molestie sit amet ac nulla. Aenean eu tristique mi,
          ut porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tincidunt magna non ex mattis cursus.
          Quisque efficitur dui et urna sagittis pharetra. In suscipit nisl semper venenatis mattis.
          Pellentesque mollis<br><br>
          tellus. Pellentesque odio justo, fermentum et neque in, congue dictum purus. Donec eu convallis
          enim, eu.</p></div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "AboutMeSection",
  components: {
    Header
  }
}
</script>

<style scoped>
* {
  background: #1b242f;
}

h2{
  font-size: xx-large;
  padding: 0 0 50px 0;
}

.typedtextMobile p{
  line-height: 1.5em;
  font-size: larger;
}

div#content-about-pic {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
}

div#content-about-pic img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

#content-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  padding-left: 20%;
  padding-right: 20%;
  text-align: center;
}
</style>