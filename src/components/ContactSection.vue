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
                 required><br>
          <input type="text" v-model="subject" name="contact_form_subject"
                 placeholder="Subject"
                 required><br>
          <textarea name="contact_form_message" v-model="body" placeholder="Your message"
                    required></textarea><br>
          <div id="container-submit-form">
            <input type="submit" id="button_submit_form" value="SEND">
          </div>
        </div>
      </form>
    </div>
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
  padding: 5px 5px 5px 10px;
  width: 600px;
  height: 50px;
  font-size: large;
}

input[type=text] {
  margin-bottom: 4px;
}

textarea {
  height: 200px;
  resize: vertical;
}

</style>