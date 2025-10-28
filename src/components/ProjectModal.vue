<template>
    <div class="modal-backdrop" @click="close">
      <div class="modal-content" @click.stop>
        <button @click="close" class="close-button" aria-label="Fechar modal">
          <X :size="24" />
        </button>
  
        <div class="modal-image-container">
          <img :src="project.imageUrl" :alt="project.title" />
        </div>
  
        <div class="modal-body">
          <h2 class="modal-title">{{ project.title }}</h2>
          
          <div class="info-bar">
            <span class="info-item date">
              <Calendar :size="14" /> {{ project.dataLancamento }}
            </span>
            <span 
              class="info-item type" 
              :class="project.tipo === 'real' ? 'real' : 'study'"
            >
              <Component :is="project.tipo === 'real' ? Rocket : Beaker" :size="14" />
              Projeto {{ project.tipo === 'real' ? 'Real' : 'de Estudo' }}
            </span>
          </div>
  
          <div class="tags-container">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
  
          <div class="description-content" v-html="parsedMarkdown"></div>
  
          <div class="project-links">
            <a :href="project.repoUrl" target="_blank" class="project-button">
              <Github :size="16" />
              Repositório
            </a>
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="project-button live">
              <ExternalLink :size="16" />
              Ver Produção
            </a>
            <span v-else class="project-button disabled">
              <ExternalLink :size="16" />
              Em Breve
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { X, Github, ExternalLink, Calendar, Rocket, Beaker } from 'lucide-vue-next'
  import MarkdownIt from 'markdown-it'
  
  const props = defineProps({
    project: {
      type: Object,
      required: true,
    },
  })
  
  const emit = defineEmits(['close'])
  
  const md = new MarkdownIt()
  const parsedMarkdown = computed(() => {
    return md.render(props.project.descricaoLonga || '')
  })
  
  const close = () => {
    emit('close')
  }
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    cursor: pointer;
  }
  
  .modal-content {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1000px; /* Aumentado para 1000px */
    height: 85vh;
    background-color: #1f1f1f;
    border: 1px solid var(--cor-glass-border);
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    cursor: auto;
    overflow: hidden;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--cor-glass-border);
    border-radius: 50%;
    color: var(--cor-texto-principal);
    cursor: pointer;
    z-index: 10;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  .close-button:hover {
    background: var(--cor-laranja-destaque);
    border-color: var(--cor-laranja-destaque);
    color: #111;
  }
  
  .modal-image-container {
    width: 100%;
    height: 300px;
    flex-shrink: 0;
    background-color: #2a2a2a;
  }
  .modal-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .modal-body {
    padding: 1.5rem 2rem;
    overflow-y: auto;
  }
  
  /* Scrollbar Minimalista */
  .modal-body::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }
  
  .modal-body::-webkit-scrollbar-track {
    background: transparent; /* Fundo transparente */
  }
  
  .modal-body::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1); /* Cor mais clara para o thumb */
    border-radius: 4px; /* Cantos arredondados */
    border: 1px solid rgba(255, 255, 255, 0.05); /* Borda sutil */
  }
  
  .modal-body::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Mais visível no hover */
  }
  
  
  .modal-title {
    font-family: var(--fonte-logo-robusta);
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    color: var(--cor-branco-acinzentado);
    margin-bottom: 0.5rem;
  }
  
  .info-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    color: var(--cor-texto-secundario);
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  .info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .info-item.type.real {
    color: #42b883;
  }
  .info-item.type.study {
    color: #61dafb;
  }
  
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .tag {
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    background-color: var(--cor-glass-bg);
    border: 1px solid var(--cor-glass-border);
    color: var(--cor-texto-secundario);
  }
  
  .description-content {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--cor-texto-principal);
    margin-bottom: 2rem;
  }
  
  :deep(.description-content h3) {
    font-family: var(--fonte-logo-robusta);
    font-size: 1.25rem;
    color: var(--cor-laranja-destaque);
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  :deep(.description-content p) {
    margin-bottom: 1rem;
  }
  :deep(.description-content ul) {
    list-style-position: inside;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }
  :deep(.description-content li) {
    margin-bottom: 0.5rem;
  }
  :deep(.description-content code) {
    background-color: #2a2a2a;
    border: 1px solid var(--cor-glass-border);
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }
  
  .project-links {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    border-top: 1px solid var(--cor-glass-border);
    padding-top: 1.5rem;
    margin-top: 1rem;
  }
  .project-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.85rem;
    background-color: rgba(245, 245, 245, 0.05);
    color: var(--cor-texto-secundario);
    border: 1px solid var(--cor-glass-border);
    transition: all 0.3s ease;
  }
  .project-button:hover {
    color: var(--cor-branco-acinzentado);
    border-color: var(--cor-texto-principal);
  }
  .project-button.live {
    background-color: rgba(255, 140, 66, 0.1);
    border-color: var(--cor-laranja-destaque);
    color: var(--cor-laranja-destaque);
  }
  .project-button.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* Media Queries para responsividade */
  @media (max-width: 768px) {
    .modal-content {
      width: 95%;
      height: 90vh; /* Pode aumentar um pouco em telas menores */
      max-width: unset; /* Remove o max-width para telas pequenas */
    }
  
    .modal-image-container {
      height: 200px; /* Ajuste a altura da imagem em telas menores */
    }
  
    .modal-body {
      padding: 1rem 1.2rem; /* Menor padding em telas pequenas */
    }
  
    .close-button {
      top: 0.75rem;
      right: 0.75rem;
      width: 36px;
      height: 36px;
    }
  
    .modal-title {
      font-size: 2rem; /* Ajuste o tamanho do título */
    }
  }
  </style>