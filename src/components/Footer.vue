<template>
  <footer class="footer-bar" :style="footerStyle">
    <div class="footer-content container">
      <div class="footer-left">
        <div class="footer-logo">
          <Code :size="20" />
          <span>Guilherme Silvestre</span>
        </div>
        <div class="footer-message">
          <span>Feito com</span>
          <Heart :size="16" class="heart-icon" fill="currentColor" />
        </div>
      </div>

      <div class="footer-right">
        <Transition name="fade" mode="out-in">
          <div class="music-now-playing" v-if="nowPlaying" :key="nowPlaying.name">
            <a :href="nowPlaying.url" target="_blank" class="music-link">
              <div class="album-art-wrapper">
                <img v-if="nowPlaying.albumArt" :src="nowPlaying.albumArt" alt="Capa do Álbum" class="album-art" crossorigin="anonymous"/>
                <div v-else class="album-art-placeholder"><Music :size="20" /></div>
              </div>
              <div class="music-details">
                <div class="music-status-line">
                  <div v-if="nowPlaying.isPlaying" class="live-indicator">
                    <div class="live-dot"></div>
                    <span>Ao Vivo</span>
                  </div>
                  <span v-else>Última ouvida</span>
                </div>
                <span class="music-title" :title="nowPlaying.name">{{ nowPlaying.name }}</span>
                <span class="music-artist">{{ nowPlaying.artist }}</span>
              </div>
            </a>
          </div>
          <div v-else class="music-now-playing loading" key="loading">
             <div class="album-art-wrapper">
                <div class="album-art-placeholder"></div>
             </div>
            <div class="music-details">
              <div class="music-status-line"><span>Conectando...</span></div>
            </div>
          </div>
        </Transition>

        <div class="separator"></div>

        <div class="footer-socials">
          <a href="https://github.com/guilhermesilvestree" target="_blank" title="GitHub"><Github :size="20" /></a>
          <a href="#" target="_blank" title="LinkedIn"><Linkedin :size="20" /></a>
          <a href="https://instagram.com/guilherme.sillvestre" target="_blank" title="Instagram"><Instagram :size="20" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { Code, Heart, Github, Linkedin, Instagram, Music } from 'lucide-vue-next';
import { nowPlaying, connectMusicSocket, disconnectMusicSocket } from '../services/musicService';
import { FastAverageColor } from 'fast-average-color';

const fac = new FastAverageColor();
const footerStyle = ref({});

watch(nowPlaying, (newTrack) => {
  if (newTrack && newTrack.albumArt) {
    fac.getColorAsync(newTrack.albumArt)
      .then(color => {
        footerStyle.value = {
          '--light-color': color.hex, // Usar HEX para a cor base
          '--light-opacity': 0.4     // Opacidade base para os brilhos
        };
      })
      .catch(e => {
        console.error("Erro ao extrair cor:", e);
        footerStyle.value = { '--light-opacity': 0 };
      });
  } else {
    footerStyle.value = { '--light-opacity': 0 };
  }
}, { immediate: true });

onMounted(() => { connectMusicSocket(); });
onUnmounted(() => { disconnectMusicSocket(); });
</script>

<style scoped>
/* --- ANIMAÇÕES --- */
@keyframes move-lights {
  0% { transform: translate(0, 0); }
  25% { transform: translate(-10px, 15px); }
  50% { transform: translate(5px, -10px); }
  75% { transform: translate(10px, 5px); }
  100% { transform: translate(0, 0); }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@keyframes heartbeat { 0% { transform: scale(1); } 50% { transform: scale(1.25); } 100% { transform: scale(1); } }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7); } 70% { box-shadow: 0 0 0 8px rgba(255, 82, 82, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 82, 82, 0); } }


/* --- EFEITO DE LUZ --- */
.footer-bar {
  position: relative;
  overflow: hidden;
  /* --light-color e --light-opacity são controlados pelo script */
}

/* Foco de luz principal 1 (fundo, esquerda) */
.footer-bar::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -20%;
  width: 500px;
  height: 200px;
  background-color: var(--light-color);
  opacity: var(--light-opacity);
  filter: blur(120px);
  animation: move-lights 20s infinite linear alternate;
  transition: opacity 1.2s ease, background-color 1.2s ease;
  pointer-events: none;
}

/* Foco de luz principal 2 (fundo, direita) */
.footer-bar::after {
  content: '';
  position: absolute;
  bottom: -60%;
  right: -20%;
  width: 400px;
  height: 250px;
  background-color: var(--light-color);
  opacity: calc(var(--light-opacity) * 0.8); /* Um pouco mais sutil */
  filter: blur(120px);
  animation: move-lights 25s infinite linear alternate-reverse;
  transition: opacity 1.2s ease, background-color 1.2s ease;
  pointer-events: none;
}

/* Foco de luz específico para a capa do álbum */
.album-art-wrapper {
  position: relative;
  z-index: 2; /* Fica acima das luzes de fundo */
}
.album-art-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: var(--light-color);
  transform: translate(-50%, -50%);
  border-radius: 6px;
  filter: blur(25px); /* Desfoque menor para ser mais focado */
  opacity: calc(var(--light-opacity) * 2); /* Mais intenso */
  z-index: -1; /* Fica atrás da imagem */
  transition: opacity 1.2s ease, background-color 1.2s ease;
}


/* --- ESTILOS GERAIS DO FOOTER (sem grandes alterações) --- */
.footer-bar {
  width: 100%; padding: 1rem 0; background-color: var(--cor-glass-bg);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid var(--cor-glass-border);
}
.footer-content { position: relative; z-index: 3; display: flex; justify-content: space-between; align-items: center; gap: 2rem; }
.footer-left, .footer-right { display: flex; align-items: center; }
.footer-left { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
.footer-right { gap: 1.5rem; }
.footer-logo { display: flex; align-items: center; gap: 0.75rem; font-family: var(--fonte-logo-robusta); font-weight: 500; font-size: 1rem; color: var(--cor-texto-principal); }
.footer-logo svg { color: var(--cor-laranja-destaque); }
.footer-message { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--cor-texto-secundario); cursor: default; }
.heart-icon { color: var(--cor-laranja-destaque); }
.footer-message:hover .heart-icon { animation: heartbeat 0.6s ease-in-out; }
.music-now-playing { display: flex; }
.music-link { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; border-radius: 8px; padding: 0.5rem; }
.album-art { width: 48px; height: 48px; border-radius: 6px; object-fit: cover; position: relative; z-index: 1; }
.album-art-placeholder { width: 48px; height: 48px; border-radius: 6px; background-color: #2a2a2a; display: flex; align-items: center; justify-content: center; color: var(--cor-texto-secundario); }
.music-details { display: flex; flex-direction: column; align-items: flex-start; min-width: 150px; }
.music-status-line { font-size: 0.75rem; color: var(--cor-texto-secundario); font-weight: 500; display: flex; align-items: center; gap: 0.4rem; height: 16px; }
.live-indicator { display: flex; align-items: center; gap: 0.4rem; color: #ff5252; }
.live-dot { width: 8px; height: 8px; background-color: #ff5252; border-radius: 50%; animation: pulse 2s infinite; }
.music-title { color: var(--cor-texto-principal); font-weight: 600; font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 180px; }
.music-artist { color: var(--cor-texto-secundario); font-size: 0.8rem; }
.separator { width: 1px; height: 40px; background-color: var(--cor-glass-border); }
.footer-socials { display: flex; align-items: center; gap: 1rem; }
.footer-socials a { color: var(--cor-texto-secundario); transition: color 0.3s ease, transform 0.3s ease; }
.footer-socials a:hover { color: var(--cor-branco-acinzentado); transform: scale(1.1); }

@media (max-width: 768px) {
  .footer-content { flex-direction: column; gap: 1.5rem; }
  .footer-left, .footer-right { width: 100%; flex-direction: row; justify-content: space-between; align-items: center; }
}
@media (max-width: 480px) {
  .footer-right { gap: 1rem; }
  .footer-logo span { display: none; }
  .separator { display: none; }
  .music-title { max-width: 120px; }
}
</style>