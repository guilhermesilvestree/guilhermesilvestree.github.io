<template>
  <section id="inicio" class="hero-section">
    <div class="hero-content container">
      <div class="text-content">
        <h1 class="hero-title">Guilherme Silvestre</h1>
        
        <div class="subtitle-container">
          <Transition name="slide-up-blur" mode="out-in">
            <p class="hero-subtitle" :key="currentSubtitle">
              {{ currentSubtitle }}
            </p>
          </Transition>
        </div>

        <div class="social-links">
          <a href="https://github.com/guilhermesilvestree" target="_blank" class="social-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
          <a href="https://instagram.com/guilherme.sillvestre" target="_blank" class="social-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// --- LÓGICA PARA ANIMAÇÃO DO TEXTO ---

// Lista de frases que irão se alternar. Adicione ou mude aqui!
const subtitles = ref([
  'Criando ideias em código',
  'Desenvolvedor Front-end',
  'Apaixonado por tecnologia'
]);

const currentSubtitleIndex = ref(0);

// Propriedade computada que retorna a frase atual
const currentSubtitle = computed(() => subtitles.value[currentSubtitleIndex.value]);

let intervalId = null;

// Quando o componente é montado, inicia o intervalo
onMounted(() => {
  intervalId = setInterval(() => {
    currentSubtitleIndex.value = (currentSubtitleIndex.value + 1) % subtitles.value.length;
  }, 3000); 
});

// Quando o componente é destruído, limpa o intervalo para evitar problemas
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: url('@/assets/hero-bg.png'); /* Certifique-se que esta imagem está na pasta src/assets */
  background-size: cover;
  background-position: right center;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, 
    rgba(18, 18, 18, 0.9) 30%, 
    rgba(18, 18, 18, 0.5) 65%
  );
  z-index: 1;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to top, var(--cor-fundo) 20%, transparent);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.text-content {
  max-width: 60%;
  padding-right: 2rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  color: var(--cor-branco-acinzentado);
  margin-bottom: 1rem;
}

/* Container para o subtítulo animado */
.subtitle-container {
  /* Define uma altura fixa para evitar que o layout "pule" durante a transição */
  height: 40px; 
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--cor-texto-secundario);
  max-width: 500px;
  margin: 0; /* Remove a margem padrão do <p> */
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  background-color: var(--cor-glass-bg);
  color: var(--cor-branco-acinzentado);
  border: 1px solid var(--cor-glass-border);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.social-button:hover {
  background-color: rgba(255, 140, 66, 0.1);
  border-color: var(--cor-laranja-destaque);
  color: var(--cor-branco-acinzentado);
  box-shadow: 0 0 15px rgba(255, 140, 66, 0.3);
  transform: translateY(-3px);
}

.social-button svg {
  width: 20px;
  height: 20px;
}

/* --- ESTILOS DA ANIMAÇÃO DO SUBTÍTULO --- */

/* Define a duração da transição */
.slide-up-blur-enter-active,
.slide-up-blur-leave-active {
  transition: all 0.5s ease;
}

/* Estilo do texto que está ENTRANDO: começa de baixo, transparente e com blur */
.slide-up-blur-enter-from {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(5px);
}

/* Estilo do texto que está SAINDO: vai para cima, transparente e com blur */
.slide-up-blur-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  filter: blur(5px);
}
</style>