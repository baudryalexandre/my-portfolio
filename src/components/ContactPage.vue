<template>
  <section id="contact">
    <div class="overlay"></div>
    <div class="content">
      <h1><span class="glitch" data-text="Contactez-moi">Contactez-moi</span></h1>
      <form class="contact-form" @submit.prevent="handleSubmit" ref="contactForm">
        <div class="form-group">
          <label for="nom">Votre Nom :</label>
          <input type="text" v-model="form.nom" id="nom" name="nom" required />
        </div>
        <div class="form-group">
          <label for="email">Votre Email :</label>
          <input type="email" v-model="form.email" id="email" name="email" required />
          <p>
            Si aucun client mail n'est configuré sur votre appareil, le lien ne fonctionnera pas.
          </p>
        </div>
        <div class="form-group">
          <label for="message">Votre Message :</label>
          <textarea
            id="message"
            v-model="form.message"
            name="message"
            :class="{ expanded: isExpanded }"
            @focus="isExpanded = true"
            @blur="isExpanded = false"
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
      <div id="social-media">
        <a href="https://www.linkedin.com/in/pro-alexandrebaudry/" target="_blank">
          <img src="../assets/linkedIn_logo.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/baudryalexandre" target="_blank">
          <img src="../assets/github_logo.png" alt="GitHub" />
        </a>
        <a href="https://cv.emage-me.com/me/alexandre-baudry" target="_blank">
          <img src="../assets/emage_me_logo.png" alt="Emage Me" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';


const notyf = new Notyf();
const isExpanded = ref(false);
const form = ref({
  nom: '',
  email: '',
  message: ''
});

// Référence au formulaire
const contactForm = ref(null);

const handleSubmit = async () => {
  try {
    // Envoie le formulaire en utilisant la référence
    const response = await emailjs.sendForm(
      'service_kcxhmsc',
      'template_rop1777',
      contactForm.value,
      'kduBzZEV46HHYUSRs'
      );
    console.log('Email sent successfully:', response);
    notyf.success('Message envoyé avec succès!');
  } catch (error) {
    console.error('Failed to send email:', error);
    notyf.error('Échec de l\'envoi du message.');
  }
};
</script>

<style scoped>
#contact {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90.5vh;
  color: #E8DCCA;
  background-image: url(../assets/background_home.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  flex-direction: column;
}

.content {
  display: flex;
  width: 82%;
  z-index: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}

form {
  width: 50%;
  padding: 2%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #250507b5;
  box-sizing: border-box;
  align-items: center;
  z-index: 2;
  margin: 8% 0% 28% 0;
}

.contact-container {
  display: flex;
  flex-direction: column;
  margin-left: 2.5%;
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  z-index: 2;
}

.form-group input,
.form-group textarea {
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.76);
  transition: border-color 0.3s;
}

.form-group textarea {
  resize: none;
  height: 50px;
}

.form-group textarea.expanded {
  height: 150px; /* Hauteur agrandie */
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.76);
  transform: none;
}

h1 {
  position: relative;
  font-size: 5rem;
  font-weight: bold;
  color: #C8AD7F;
  z-index: 2;
}

/* Effet Glitch */
.glitch {
  position: relative;
  font-size: 3rem;
  margin-bottom: 10%;
  font-weight: bold;
  color: #C8AD7F;
  z-index: 2;
  animation: glitch-animation 2s infinite;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 77%;
  background: transparent;
  overflow: hidden;
}

.glitch::before {
  left: -2px;
  text-shadow: 2px 0 red;
  clip: rect(0, 900px, 0, 0);
  animation: glitch-animation-before 1s infinite linear alternate-reverse;
}

.glitch::after {
  left: 2px;
  text-shadow: -2px 0 blue;
  clip: rect(0, 900px, 0, 0);
  animation: glitch-animation-after 1s infinite linear alternate-reverse;
}

@keyframes glitch-animation {
  0%, 5% {
    transform: translate(0);
  }
  10% {
    transform: translate(-2px, -2px);
  }
  15% {
    transform: translate(-2px, 2px);
  }
  20% {
    transform: translate(2px, -2px);
  }
  25% {
    transform: translate(2px, 2px);
  }
  30% {
    transform: translate(0);
  }
  35% {
    transform: translate(2px, -2px);
  }
  40% {
    transform: translate(-2px, 2px);
  }
  45% {
    transform: translate(2px, 2px);
  }
  50% {
    transform: translate(-2px, -2px);
  }
  55% {
    transform: translate(0);
  }
  60%, 100% {
    transform: translate(0);
  }
}

@keyframes glitch-animation-before {
  0%, 5% {
    clip: rect(42px, 9999px, 44px, 0);
    transform: skew(0.3deg);
  }
  10% {
    clip: rect(15px, 9999px, 56px, 0);
    transform: skew(0.1deg);
  }
  15% {
    clip: rect(86px, 9999px, 30px, 0);
    transform: skew(0.1deg);
  }
  20% {
    clip: rect(70px, 9999px, 96px, 0);
    transform: skew(0.3deg);
  }
  25% {
    clip: rect(45px, 9999px, 76px, 0);
    transform: skew(0.5deg);
  }
  30% {
    clip: rect(56px, 9999px, 99px, 0);
    transform: skew(0.2deg);
  }
  35% {
    clip: rect(80px, 9999px, 92px, 0);
    transform: skew(0.4deg);
  }
  40% {
    clip: rect(24px, 9999px, 96px, 0);
    transform: skew(0.3deg);
  }
  45% {
    clip: rect(77px, 9999px, 96px, 0);
    transform: skew(0.2deg);
  }
  50% {
    clip: rect(33px, 9999px, 44px, 0);
    transform: skew(0.1deg);
  }
  55%, 100% {
    clip: rect(42px, 9999px, 44px, 0);
    transform: skew(0.3deg);
  }
}

@keyframes glitch-animation-after {
  0%, 5% {
    clip: rect(22px, 9999px, 20px, 0);
    transform: skew(0.3deg);
  }
  10% {
    clip: rect(37px, 9999px, 76px, 0);
    transform: skew(0.5deg);
  }
  15% {
    clip: rect(50px, 9999px, 36px, 0);
    transform: skew(0.1deg);
  }
  20% {
    clip: rect(12px, 9999px, 99px, 0);
    transform: skew(0.4deg);
  }
  25% {
    clip: rect(90px, 9999px, 60px, 0);
    transform: skew(0.3deg);
  }
  30% {
    clip: rect(72px, 9999px, 96px, 0);
    transform: skew(0.5deg);
  }
  35% {
    clip: rect(44px, 9999px, 22px, 0);
    transform: skew(0.2deg);
  }
  40% {
    clip: rect(30px, 9999px, 77px, 0);
    transform: skew(0.3deg);
  }
  45% {
    clip: rect(80px, 9999px, 88px, 0);
    transform: skew(0.1deg);
  }
  50% {
    clip: rect(56px, 9999px, 25px, 0);
    transform: skew(0.4deg);
  }
  55%, 100% {
    clip: rect(22px, 9999px, 20px, 0);
    transform: skew(0.3deg);
  }
}

label {
  color: #C8AD7F;
}

p {
  color: #E8DCCA;
}

#social-media {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

#social-media img {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: #ffffff;
}

#social-media img:hover {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.76);
  transform: translateY(-5px);
}

button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #C8AD7F;
  color: #0e0e0e;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  z-index: 2;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #E8DCCA;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.statusClass {
  display: none;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  animation: fadeIn 10s ease-out;
  margin-top: 10px;
}

.show {
  display: block;
}


</style>
