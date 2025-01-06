<head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@400&display=swap" rel="stylesheet">
</head>

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

  <div v-if="step === 2" class="container">
    <h2>Eu sabia que você não iria resistir, hahahaha!</h2>
    <h3>Já manda msg no whatsapp! Até breve!!! 🤪</h3>
    <!-- Botão com o link -->
    <a href="https://api.whatsapp.com/send?phone=5521990281466&text=BORA%20BEBEEEERRRRR!!!!!!!" 
       target="_blank" 
       class="info-button">
      Bora!!!
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
/* Definindo o container geral */
.container {
  text-align: center;
  margin-top: 10%;
  font-family: Arial, sans-serif;
}

/* Estilo para o H1 */
h1 {
  font-family: 'Poppins', sans-serif; /* Fonte Poppins */
  font-size: 3rem; /* Aumenta o tamanho do título */
  color: #4CAF50; /* Cor do texto */
  margin-bottom: 2rem;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 25px;
  border-bottom: 2px solid #333;
  background-color: rgba(255, 255, 255, 0.8); /* Fundo levemente transparente */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
  opacity: 0; /* Inicialmente invisível para animação */
  animation: fadeIn 1.5s forwards; /* Animação de fade-in */
  transition: color 0.3s ease, transform 0.3s ease; /* Transições suaves */
}

/* Animação de Fade-In */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-30px); /* Move o título para cima */
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0); /* Finaliza na posição normal */
  }
}

/* Efeito de hover para interação */
h1:hover {
  color: #FF5722; /* Muda a cor do texto ao passar o mouse */
  transform: translateX(-50%) scale(1.1); /* Aumenta um pouco o tamanho */
  cursor: pointer; /* Muda o cursor para um ponteiro */
}

/* Estilo para o H2 */
h2 {
  font-family: 'Roboto', sans-serif; /* Fonte Roboto */
  font-size: 2rem;
  margin-bottom: 2rem;
  position: fixed;
  top: 8rem; /* Ajusta a posição para ficar abaixo do H1 */
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Fundo leve */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Estilo dos botões */
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
