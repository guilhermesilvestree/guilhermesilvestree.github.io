<template>
  <header class="header-container">
    <div class="header-content container">
      
      <a @click.prevent="navStore.setView('home')" href="#" class="logo-link">
        <div class="logo">
          <span>Gui</span>
        </div>
      </a>

      <nav class="navigation">
        <ul>
          <li v-for="link in navLinks" :key="link.name">
            <a 
              :href="link.path" 
              @click.prevent="navStore.setView(link.viewName)"
              :class="{ 'router-link-active': navStore.currentViewName === link.viewName }"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useNavigationStore } from '../stores/navigation'

const navStore = useNavigationStore()
const navLinks = ref([
  { name: 'Início', path: '#', viewName: 'home' },
  { name: 'Sobre', path: '#', viewName: 'about' },
  { name: 'Projetos', path: '#', viewName: 'projects' },
]);
</script>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  
  padding: 1.25rem 0; 
  
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo-link {
  text-decoration: none;
  color: inherit; 
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--fonte-logo-robusta);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--cor-branco-acinzentado);
}

.logo svg {
  color: var(--cor-laranja-destaque);
}

.navigation ul {
  display: flex;
  list-style: none;
  gap: 0.75rem;
}

.navigation a {
  color: var(--cor-texto-secundario);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.navigation a:hover {
  color: var(--cor-branco-acinzentado);
}

.navigation a.router-link-active {
  color: var(--cor-branco-acinzentado);
  font-weight: 700;
}
</style>