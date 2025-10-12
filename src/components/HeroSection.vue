<template>
  <section id="inicio" class="hero-section">
    <div class="hero-content container">
      <div class="text-content">
        <h1 class="hero-title">Guilherme Silvestre</h1>
        <p class="hero-subtitle">Criando ideias em código</p>
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
// Nenhuma lógica de script é necessária para este componente por enquanto
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  min-height: 100vh; /* Ocupa a altura toda da tela */
  position: relative;
  overflow: hidden;

  /* Sua foto como background na direita */
  background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbm8lMjBkZSUyMGZ1bmRvJTIwcGFpc2FnZW18ZW58MHx8MHx8fDA%3D');
  background-size: cover;
  background-position: right center; /* Alinha a imagem à direita */
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Começamos com a cor de fundo com 85% de opacidade.
    O degradê agora cobre os primeiros 65% da tela, ficando "mais pro lado".
  */
  background: linear-gradient(to right, rgba(26, 26, 26, 0.85) 30%, transparent 65%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2; /* Garante que o conteúdo fique acima do degradê */
  display: flex;
  justify-content: flex-start; /* Alinha o conteúdo à esquerda */
  width: 100%;
}

.text-content {
  max-width: 60%; /* Limita a largura do texto a 60% da seção */
  padding-right: 2rem;
}

.hero-title {
  /* Tamanho de fonte responsivo como solicitado */
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  color: var(--cor-branco-acinzentado);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--cor-texto-secundario);
  margin-bottom: 2rem;
  max-width: 500px;
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
  
  /* Efeito base (Glassmorphism leve) */
  background-color: var(--cor-glass-bg);
  color: var(--cor-branco-acinzentado);
  border: 1px solid var(--cor-glass-border);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  transition: all 0.3s ease;
}

.social-button:hover {
  background-color: rgba(255, 140, 66, 0.1); /* Laranja com transparência */
  border-color: var(--cor-laranja-destaque);
  color: var(--cor-branco-acinzentado);
  
  /* Efeito de "glow" */
  box-shadow: 0 0 15px rgba(255, 140, 66, 0.3);
  transform: translateY(-3px);
}

.social-button svg {
  width: 20px;
  height: 20px;
}

</style>