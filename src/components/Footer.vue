<template>
  <footer class="footer-bar">
    <div class="footer-content container">
      <div class="footer-logo">
        <Code :size="20" />
        <span>Guilherme Silvestre</span>
      </div>
      
      <div class="footer-message">
        <span>Feito com</span>
        <Heart :size="16" class="heart-icon" fill="currentColor" />
      </div>

      <div class="footer-socials">
        <a href="https://github.com/guilhermesilvestree" target="_blank" title="GitHub">
          <Github :size="20" />
        </a>
        <a href="#" target="_blank" title="LinkedIn">
          <Linkedin :size="20" />
        </a>
        <a href="https://instagram.com/guilherme.sillvestre" target="_blank" title="Instagram">
          <Instagram :size="20" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Code, Heart, Github, Linkedin, Instagram } from 'lucide-vue-next';
</script>

<style scoped>
/* --- NOVA ANIMAÇÃO DE BATIDA DO CORAÇÃO --- */
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.footer-bar {
  width: 100%;
  padding: 1.5rem 0;
  
  background-color: var(--cor-glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid var(--cor-glass-border);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--fonte-logo-robusta);
  font-weight: 500;
  font-size: 1rem;
  color: var(--cor-texto-principal);
}

.footer-logo svg {
  color: var(--cor-laranja-destaque);
}

.footer-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--cor-texto-secundario);
  cursor: default; /* Para mostrar que não é clicável */
}

.heart-icon {
  color: var(--cor-laranja-destaque);
  transition: transform 0.3s ease; /* Transição suave */
}

/* --- ATIVA A ANIMAÇÃO AO PASSAR O MOUSE --- */
.footer-message:hover .heart-icon {
  animation: heartbeat 0.6s ease-in-out;
}


.footer-socials {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-socials a {
  color: var(--cor-texto-secundario);
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-socials a:hover {
  color: var(--cor-branco-acinzentado);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1.25rem;
  }
}
</style>