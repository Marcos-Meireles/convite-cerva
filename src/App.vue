<template>
  <div v-if="step === 1" class="container">
    <h1>Venho aqui para realizar um convite especial organizado pelos deuses da bebedeira!</h1>
    <h2 class="invitation">Vamo tomar uma???? 🍻🍻</h2>
    <div class="buttons">
      <button class="accept-button" @click="accept">Sim</button>
      <button
        ref="noButton"
        @mouseenter="moveButton"
        class="no-button"
      >
        Não
      </button>
    </div>
  </div>
  <div v-if="step === 1" class="container">
    <h2 class="invitation">Vamo tomar uma???? 🍻🍻</h2>
  </div>
  <div v-if="step === 2" class="container">
    <h2>Eu sabia que você não iria resistir, hahahaha!</h2>
    <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/league-of-legends/a/a6/Gragas_lol.jpg" alt="Gragas chamando para beber" class="invitation-image"/> 
    <h3>Já manda msg no whatsapp! Até breve!!! 🤪</h3>
    <!-- Botão com o link -->
    <a href="https://api.whatsapp.com/send?phone=${import.meta.env.WHATSAPP_NUMBER}&text=BORA%20BEBEEEERRRRR!!!!!!!" 
       target="_blank" 
       class="info-button">
      Bora!!!
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const whatsappNumber = ref('');

onMounted(async () => {
  const response = await fetch('/api/getWhatsAppNumber');
  const data = await response.json();
  whatsappNumber.value = data.number;
});

const noButton = ref<HTMLButtonElement | null>(null);
const step = ref(1)

const moveButton = () => {
  const button = noButton.value;
  if (button) {
    const container = button.parentElement;
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const maxX = containerRect.width - button.offsetWidth;
      const maxY = containerRect.height - button.offsetHeight;

      let randomX, randomY;
      do {
        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;
      } while (
        Math.abs(randomX - parseFloat(button.style.left || '0')) < 50 ||
        Math.abs(randomY - parseFloat(button.style.top || '0')) < 50
      );

      button.style.position = 'absolute';
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  }
};

const accept = () => {
  step.value = 2;
};
</script>

<style>
.container {
  text-align: center;
  margin-top: 10%;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-bottom: 2px solid #333;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: fixed;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
}

.invitation-image {
  margin-top: 2rem;
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
}

.buttons {
  position: relative;
  width: 300px;
  height: 200px;
  margin: 0 auto;
  margin-top: 50px;
}

.accept-button {
  color: #ffffff;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: 2px solid #333;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #f0f0f0;
}

.no-button {
  background-color: #ffcccc;
  position: absolute;
}

.info-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #25D366;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.info-button:hover {
  background-color: #1da851;
}
</style>
