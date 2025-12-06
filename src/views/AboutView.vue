<template>
  <section id="sobre" class="about-section">
    <div class="container">
      
      <div class="intro-header">
        <div class="intro-image">
          <img :src="eu4" alt="Guilherme Silvestre" class="profile-photo" />
        </div>
        <div class="intro-text">
          <h2 class="section-title">Guilherme Silvestre</h2>
          <p class="section-subtitle">Desenvolvedor iniciante apaixonado por tecnologia e programação</p>
        </div>

      </div>
      <hr class="divider">

      <div class="about-content">
        <div class="text-column">
          <h3>Sobre Mim</h3>
          <p>
            <strong>Guilherme Silvestre</strong>. Sou um desenvolvedor iniciante e atualmente
            estudo Ensino Médio com Técnico em Desenvolvimento de Sistemas na ETEC, aqui em
            Itapetininga-SP.
          </p>
          <p>
            Sou uma pessoa curiosa, sempre buscando aprender coisas novas no mundo da
            tecnologia. Comecei a programar e logo me apaixonei pela forma como podemos
            criar ideias e transformá-las em código funcional.
          </p>
          <p>
            Fora do horário de estudo, quando não estou (tentando) programar algo novo,
            gosto de ouvir música, jogar alguma coisa ou simplesmente relaxar.
          </p>
        </div>
        <div class="skills-column">
          <h3>Estudo</h3>
          <p>Estou focado em desenvolvimento web moderno, com as seguintes tecnologias:</p>
          <ul class="skills-list">
            <li><img :src="htmlIcon" alt="HTML5 & CSS3 Icon" class="skill-icon" /> HTML5 & CSS3</li>
            <li><img :src="jsIcon" alt="JavaScript Icon" class="skill-icon" /> JavaScript</li>
            <li><img :src="vueIcon" alt="Vue.js Icon" class="skill-icon" /> Vue.js (Este site!)</li>
            <li><img :src="nodeIcon" alt="Node.js Icon" class="skill-icon" /> Node.js (Iniciante)</li>
            <li><img :src="expressIcon" alt="Express.js Icon" class="skill-icon" /> Express.js</li>
            <li><img :src="mongoDBIcon" alt="MongoDB Icon" class="skill-icon" /> MongoDB</li>
            <li><img :src="githubIcon" alt="Git & GitHub Icon" class="skill-icon invert-icon" /> Git & GitHub</li>
          </ul>
        </div>
      </div>

      <hr class="divider">

      <div id="projetos" class="projects-section">
        <h2 class="section-title">Projeto em Destaque</h2>
        <p class="section-subtitle">
          No que estou me dedicando no momento
        </p>
        
        <div class="project-showcase">
          <a href="https://www.agendadoutor.com" target="_blank" class="project-card">
            <div class="project-image-container">
              <div class="carousel">
                <img 
                  v-for="(image, index) in projectImages" 
                  :key="index"
                  :src="image" 
                  :class="['carousel-image', { active: currentImageIndex === index }]"
                  alt="Agenda Doutor Screenshot"
                >
              </div>
              <div class="project-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </div>
            <div class="project-content">
              <h3>www.agendadoutor.com</h3>
              <p class="project-description">
                Um CRM completo que ajuda médicos e clínicas a se organizarem com disparos automáticos de mensagens no WhatsApp, 
                gestão de pacientes, agendamentos e muito mais.
              </p>
              <div class="project-tags">
                <span class="tag">CRM</span>
                <span class="tag">WhatsApp</span>
                <span class="tag">Saúde</span>
                <span class="tag">Automação</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <hr class="divider">

      <div id="contato" class="contact-section">
        <h2 class="section-title">Contato</h2>
        <p class="section-subtitle">Vamos conversar! Me encontre nas redes abaixo.</p>
        
        <div class="social-links-footer">
          <a href="https://github.com/guilhermesilvestree" target="_blank" class="social-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
          <a href="https://instagram.com/guilherme.sillvestre" target="_blank" class="social-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/guilhermesilvestree/" target="_blank" class="social-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2
0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import htmlIcon from '@/assets/about/tecn/html.png' 
import jsIcon from '@/assets/about/tecn/js.png'
import vueIcon from '@/assets/about/tecn/vue.png'
import nodeIcon from '@/assets/about/tecn/node.png'
import expressIcon from '@/assets/about/tecn/express.png' 
import mongoDBIcon from '@/assets/about/tecn/mongodb.png'
import githubIcon from '@/assets/about/tecn/github.png'

import eu4 from '@/assets/about/eu/3.webp'
import agendaDoutorImg from '@/assets/agendaDoutor.png'

// Carousel para o projeto
const projectImages = ref([
  agendaDoutorImg
]);
const currentImageIndex = ref(0);

onMounted(() => {
  // Inicia o carrossel
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % projectImages.value.length;
  }, 3000);
});
</script>

<style scoped>
.about-section {
  padding: 6rem 0; 
  background-color: var(--cor-fundo);
  color: var(--cor-texto-principal);
  min-height: 100vh;
}

.section-title {
  font-family: var(--fonte-logo-robusta);
  font-size: clamp(2rem, 4vw, 3rem); 
  color: var(--cor-branco-acinzentado);
  text-align: center;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  color: var(--cor-texto-secundario);
  text-align: center;
  margin-bottom: 3rem;
}

.intro-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto 4rem auto;
  padding: 0 1rem;
}

.intro-text {
  flex: 1;
  text-align: left;
}

.intro-text .section-title {
  text-align: left;
  margin-bottom: 0.5rem;
}

.intro-text .section-subtitle {
  text-align: left;
  margin-bottom: 0;
}

.profile-photo {
  width: 280px;
  height: auto;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid var(--cor-glass-border);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  transform: rotate(3deg);
  transition: all 0.3s ease;
}

.profile-photo:hover {
  transform: rotate(0deg) scale(1.02);
  border-color: var(--cor-laranja-destaque);
}

.divider {
  border: none;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--cor-glass-border),
    transparent
  );
  margin: 4rem auto;
  width: 80%;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.text-column h3,
.skills-column h3 {
  font-family: var(--fonte-logo-robusta);
  font-size: 1.5rem;
  color: var(--cor-laranja-destaque);
  margin-bottom: 1rem;
}

.text-column p,
.skills-column p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--cor-texto-principal);
  margin-bottom: 1rem;
}

.skills-list {
  list-style: none;
  padding: 0;
  display: flex; 
  flex-direction: column; 
  gap: 0.75rem; 
  margin-top: 1.5rem; 
}

.skills-list li {
  font-size: 1rem;
  color: var(--cor-texto-principal);
  display: flex;
  align-items: center;
  gap: 0.75rem; 
}

.skill-icon {
  width: 20px;
  height: 20px;
  object-fit: contain; 
  flex-shrink: 0; 
}

.invert-icon {
  filter: invert(1);
}

/* Projeto em Destaque */
.projects-section {
  padding-top: 6rem;
  margin-top: -4rem;
}

.project-showcase {
  max-width: 900px;
  margin: 0 auto;
}

.project-card {
  display: flex;
  flex-direction: row;
  border: 1px solid var(--cor-glass-border);
  border-radius: 16px;
  background-color: var(--cor-glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  text-decoration: none;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: var(--cor-laranja-destaque);
  box-shadow: 0 20px 60px rgba(255, 140, 66, 0.2);
}

.project-image-container {
  position: relative;
  flex: 0 0 45%;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-image.active {
  opacity: 1;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-overlay svg {
  color: var(--cor-laranja-destaque);
  filter: drop-shadow(0 0 10px rgba(255, 140, 66, 0.5));
}

.project-content {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-content h3 {
  font-family: var(--fonte-logo-robusta);
  font-size: 1.5rem;
  color: var(--cor-branco-acinzentado);
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, var(--cor-branco-acinzentado) 0%, var(--cor-laranja-destaque) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--cor-texto-principal);
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.4rem 0.85rem;
  background-color: rgba(255, 140, 66, 0.1);
  border: 1px solid rgba(255, 140, 66, 0.3);
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--cor-laranja-destaque);
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-card:hover .tag {
  background-color: rgba(255, 140, 66, 0.2);
  border-color: var(--cor-laranja-destaque);
}

/* Música */
.music-gallery {
  max-width: 1000px;
  margin: 0 auto;
}

.loading-state, .error-state {
  text-align: center;
  color: var(--cor-texto-secundario);
  font-size: 1.1rem;
  padding: 3rem 0;
}

.error-state {
  color: var(--cor-laranja-destaque);
}

.music-container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.music-card {
  border: 1px solid var(--cor-glass-border);
  border-radius: 12px;
  background-color: var(--cor-glass-bg);
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;
}

.music-card:hover {
  transform: translateY(-5px);
  border-color: var(--cor-laranja-destaque);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}

.artist-card {
  flex-basis: 70%;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1.5rem;
}

.artist-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.artist-info {
  display: flex;
  flex-direction: column;
}

.artist-info span:first-of-type {
  font-size: 0.9rem;
  color: var(--cor-texto-secundario);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.artist-info strong {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--cor-branco-acinzentado);
  margin: 0.25rem 0;
}

.artist-info span:last-of-type {
  font-size: 1rem;
  color: var(--cor-laranja-destaque);
  font-weight: 600;
}

.album-card {
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.album-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.album-info {
  display: flex;
  flex-direction: column;
}

.album-info strong {
  font-size: 1.1rem;
  color: var(--cor-branco-acinzentado);
  margin-bottom: 0.25rem;
}

.album-info span {
  font-size: 0.9rem;
  color: var(--cor-texto-secundario);
}

.contact-section {
  padding-top: 6rem;
  margin-top: -4rem;
}

.social-links-footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap; 
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

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr; 
  }

  .intro-header {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }

  .intro-text {
    text-align: center;
  }

  .intro-text .section-title,
  .intro-text .section-subtitle {
    text-align: center;
  }

  .profile-photo {
    width: 240px;
    transform: rotate(0deg);
  }
  
  .project-card {
    flex-direction: column;
  }

  .project-image-container {
    flex: 0 0 auto;
    aspect-ratio: 16 / 9;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-content h3 {
    font-size: 1.25rem;
  }

  .project-description {
    font-size: 0.9rem;
  }
  
  .music-container {
    flex-direction: column;
  }

  .artist-card,
  .album-card {
    flex-basis: 100%;
  }

  .artist-info strong {
    font-size: 2rem;
  }
}
</style>