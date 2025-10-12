<template>
  <header class="header-container" :class="{ 'scrolled': isScrolled }">
    <div class="header-content-wrapper container" :class="{ 'scrolled-content': isScrolled }">
      <div class="logo">
        <Code />
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> -->
        <span>Guilherme Silvestre</span>
      </div>
      <nav class="navigation">
        <ul>
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.path">{{ link.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Code } from 'lucide-vue-next';

// Array de links para facilitar a manutenção
const navLinks = ref([
  { name: 'Início', path: '#inicio' },
  { name: 'Sobre', path: '#sobre' },
  { name: 'Projetos', path: '#projetos' },
  { name: 'Contato', path: '#contato' }
]);

const isScrolled = ref(false);

const handleScroll = () => {
  // A classe 'scrolled' é aplicada quando o scroll passar de 50 pixels
  isScrolled.value = window.scrollY > 50;
};

// Adiciona o listener quando o componente é montado
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Remove o listener quando o componente é destruído para evitar memory leaks
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Contêiner principal que fica fixo */
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1.5rem 0; /* Padding inicial */
  
  /* Efeito de vidro aplicado desde o início */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  transition: padding 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Wrapper do conteúdo que vai mudar de forma */
.header-content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  /* Propriedades que serão animadas */
  border-radius: 0;
  border: 1px solid transparent; /* Começa com borda transparente */
  background-color: transparent; /* Começa com fundo transparente */
  padding: 0;
  
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Quando rolar a página... */
.header-container.scrolled {
  padding-top: 1rem; /* Aproxima a ilha do topo */
  padding-bottom: 1rem;
}

.header-content-wrapper.scrolled-content {
  max-width: fit-content;
  margin: 0 auto;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  
  /* Ativa o fundo e a borda da ilha */
  background-color: var(--cor-glass-bg);
  border-color: var(--cor-glass-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}

/* --- Estilos do Logo e Navegação (sem grandes mudanças) --- */
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--fonte-logo-robusta);
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: var(--cor-branco-acinzentado);
  transition: font-size 0.4s ease;
}

.logo svg {
  color: var(--cor-laranja-destaque);
}

.navigation ul {
  display: flex;
  list-style: none;
  gap: 0.5rem;
}

.navigation a {
  color: var(--cor-texto-secundario);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
}

.navigation a:hover {
  color: var(--cor-branco-acinzentado);
  background-color: var(--cor-glass-bg);
}

/* Ajustes finos para o estado de "ilha" */
.scrolled-content .logo {
  font-size: 1rem;
}

.scrolled-content .logo svg {
  width: 20px;
  height: 20px;
}

.scrolled-content .navigation {
  margin-left: 1rem;
}
</style>