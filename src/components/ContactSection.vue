<template>
  <section class="section" id="section-3">
    <Header name="Contact"/>
    <div id="form-title">
      <p>Have a question? Send me an email!</p>
    </div>
    <div id="container-send-email">
      <form @submit="sendMail">
        <div id="container-contact">
          <input type="text" v-model="email" name="contact_form_email" placeholder="Enter your email"
                 required>
          <input type="text" v-model="subject" name="contact_form_subject"
                 placeholder="Subject"
                 required>
          <textarea name="contact_form_message" v-model="body" placeholder="Your message"
                    required></textarea>
          <div id="container-submit-form">
            <input type="submit" id="button_submit_form" value="SEND">
          </div>
        </div>
      </form>
    </div>
    <footer>
      <p>Kaedin Schouten © 2021</p>
    </footer>
  </section>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "ContactSection",
  components: {
    Header
  },
  data() {
    return {
      email: '',
      subject: '',
      body: ''
    }
  },
  methods: {
    sendMail(e) {
      e.preventDefault()
      window.location = 'mailto:' + this.email + '?body=' + this.body + '&subject=' + this.subject
    }
  }
}
</script>

<style scoped>
div#container-submit-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type=submit] {
  margin-top: 50px;
  padding: 10px 50px 10px 50px;
  background: #2f3e51;
  border: 3px solid #253241;
}

input[type=submit]:hover {
  border: 3px solid #04c2c9;
  background: #04c2c9;
  transition: 0.5s;
}

div#container-send-email {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1 1 auto;
}


div#form-title {
  display: flex;
  justify-content: center;
}

div#form-title p {
  color: #04c2c9;
  font-size: larger;
  margin: 0;
  padding: 0;
}

input[type=text], textarea {
  border: none;
  background: #253241;
  width: 600px;
  height: 50px;
  padding: 5px;
  font-size: large;
}

input[type=text] {
  margin-bottom: 4px;
}

textarea {
  height: 200px;
  resize: vertical;
}

p{
  padding: 0;
  margin: 0;
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

#container-contact{
  padding-bottom: 20px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  form{
    width: 80%;
  }
  textarea, input[type=text]{
    width: 100%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  #container-contact{
    display: flex;
    justify-content: center;
    flex-direction: column;
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