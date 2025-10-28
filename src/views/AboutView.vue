<template>
  <section id="sobre" class="about-section">
    <div class="container">
      
      <h2 class="section-title">Sobre mim</h2>
      <p class="section-subtitle">Eu falando de mim...</p>

      <div class="photo-gallery">
        <img :src="eu3" alt="Guilherme Silvestre Foto 3" class="photo photo-3" />
        <img :src="eu2" alt="Guilherme Silvestre Foto 2" class="photo photo-2" />
        <img :src="eu4" alt="Guilherme Silvestre Foto 4" class="photo photo-4" />
        <img :src="eu1" alt="Guilherme Silvestre Foto 1" class="photo photo-1" />
      </div>
      <hr class="divider">

      <div class="about-content">
        <div class="text-column">
          <h3>É Eu:</h3>
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
          <h3>Eu sei</h3>
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

      <hr class="divider" v-if="musicData">

      <div id="gostos" class="projects-section" v-if="musicData">
        <h2 class="section-title">Coisas que eu curto</h2>
        <p class="section-subtitle">
          O que estou ouvindo no momento
        </p>
        
        <div class="music-gallery">
          <div v-if="loadingMusic" class="loading-state">
            <p>Buscando meus favoritos...</p>
          </div>
          
          <div v-else-if="musicError" class="error-state">
            <p>{{ musicError }}</p>
          </div>
          
          <div v-else-if="musicData" class="music-container">
            <a :href="musicData.artist.url" target="_blank" class="music-card artist-card">
              <img :src="musicData.artist.image" :alt="musicData.artist.name" class="artist-image">
              <div class="artist-info">
                <span>Artista mais ouvido</span>
                <strong>{{ musicData.artist.name }}</strong>
                <span>{{ musicData.artist.plays }} plays</span>
              </div>
            </a>
            
            <a :href="musicData.album.url" target="_blank" class="music-card album-card">
              <img :src="musicData.album.albumArt" :alt="musicData.album.name" class="album-image">
              <div class="album-info">
                <strong>{{ musicData.album.name }}</strong>
                <span>{{ musicData.album.artist }}</span>
              </div>
            </a>
          </div>
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
          <a href="#" target="_blank" class="social-button">
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
import apiService from '@/services/apiService' 

import htmlIcon from '@/assets/about/tecn/html.png' 
import jsIcon from '@/assets/about/tecn/js.png'
import vueIcon from '@/assets/about/tecn/vue.png'
import nodeIcon from '@/assets/about/tecn/node.png'
import expressIcon from '@/assets/about/tecn/express.png' 
import mongoDBIcon from '@/assets/about/tecn/mongodb.png'
import githubIcon from '@/assets/about/tecn/github.png'

import eu1 from '@/assets/about/eu/1.webp'
import eu2 from '@/assets/about/eu/2.webp'
import eu3 from '@/assets/about/eu/3.webp'
import eu4 from '@/assets/about/eu/4.webp'

const musicData = ref(null);
const loadingMusic = ref(true);
const musicError = ref(null);

onMounted(async () => {
  loadingMusic.value = true;
  musicError.value = null;
  
  try {
    const response = await apiService.getFavorites();
    musicData.value = response.data;

    if (musicData.value && musicData.value.artist && musicData.value.artist.name === "Matuê") {
      musicData.value.artist.image = "https://lastfm.freetls.fastly.net/i/u/770x0/c9e9f918b45e38dc4800e4207bf486b7.jpg#c9e9f918b45e38dc4800e4207bf486b7";
    }

  } catch (err) {
    console.error('Falha ao buscar favoritos:', err);
    musicError.value = 'Não foi possível carregar meus favoritos no momento.';
  } finally {
    loadingMusic.value = false;
  }
});
</script>

<style scoped>
.about-section {
  padding: 6rem 0; 
  padding-top: 10rem; 
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

.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto 4rem auto;
}

.photo {
  width: 100%;
  aspect-ratio: 9 / 16;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid var(--cor-glass-border);
  background-color: var(--cor-glass-bg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.photo:hover {
  transform: scale(1.05) rotate(0deg) !important;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  border-color: var(--cor-laranja-destaque);
}

.photo-1 { transform: rotate(-3deg); }
.photo-2 { transform: rotate(2deg); }
.photo-3 { transform: rotate(4deg); }
.photo-4 { transform: rotate(-1deg); }

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

.projects-section {
  padding-top: 6rem;
  margin-top: -4rem;
}

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

  .photo-gallery {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
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