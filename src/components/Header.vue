<template>
  <header class="header-container">
    <div class="header-content container">
      <div class="logo">
        <Code />
        <span>Guilherme Silvestre</span>
      </div>
      <div class="nav-wrapper">
        <!-- <nav class="navigation">
          <ul>
            <li v-for="link in navLinks" :key="link.name">
              <a :href="link.path">{{ link.name }}</a>
            </li>
          </ul>
        </nav> -->
        
        <div class="settings-dropdown" ref="dropdownRef">
          <button @click="isDropdownOpen = !isDropdownOpen" class="settings-button" title="Configurações">
            <Settings :size="20" />
          </button>

          <Transition name="dropdown">
            <div v-if="isDropdownOpen" class="dropdown-menu">
              <div class="dropdown-header">
                <Settings :size="16" />
                <span>Preferências</span>
              </div>
              <hr class="dropdown-divider" />
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <div class="item-label">
                    <Sparkles :size="16" />
                    <span>Efeito de Ruído</span>
                  </div>
                  <ToggleSwitch v-model="settingsStore.isNoiseEnabled" />
                </div>
                </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Code, Settings, Sparkles } from 'lucide-vue-next';
import { useSettingsStore } from '@/stores/settings';
import ToggleSwitch from './global/ToggleSwitch.vue';

const settingsStore = useSettingsStore();
const isDropdownOpen = ref(false);
const dropdownRef = ref(null);

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

const navLinks = ref([
  { name: 'Início', path: '#inicio' },
  { name: 'Sobre', path: '#sobre' },
  { name: 'Projetos', path: '#projetos' },
  { name: 'Contato', path: '#contato' }
]);
</script>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1.5rem 0;
  background-color: rgba(18, 18, 18, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--cor-glass-border);
  transition: all 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-family: var(--fonte-logo-robusta);
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: var(--cor-branco-acinzentado);
}

.logo svg {
  color: var(--cor-laranja-destaque);
  width: 28px;
  height: 28px;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navigation ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}

.navigation a {
  color: var(--cor-texto-secundario);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.navigation a:hover {
  color: var(--cor-branco-acinzentado);
  background-color: var(--cor-glass-bg);
}

/* --- ESTILOS REFINADOS DO DROPDOWN --- */
.settings-dropdown {
  position: relative;
}

.settings-button {
  background: transparent;
  border: none;
  color: var(--cor-texto-secundario);
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.settings-button:hover,
.settings-button:focus {
  color: var(--cor-branco-acinzentado);
  background-color: var(--cor-glass-bg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 12px); /* Um pouco mais de espaço */
  right: 0;
  width: 240px; /* Um pouco mais largo */
  background-color: rgba(24, 24, 24, 0.8); /* Fundo mais escuro e opaco */
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid var(--cor-glass-border);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transform-origin: top right; /* Animação origina do canto superior direito */
}

.dropdown-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--cor-texto-principal);
}

.dropdown-divider {
  border: none;
  height: 1px;
  background-color: var(--cor-glass-border);
  margin: 0.5rem 0;
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover {
  background-color: var(--cor-glass-bg);
}

.item-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--cor-texto-principal);
  font-size: 0.9rem;
  font-weight: 500;
}

.item-label svg {
  color: var(--cor-laranja-destaque);
}

/* --- ANIMAÇÃO DO DROPDOWN --- */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}
</style>