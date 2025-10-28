<template>
  <section 
    id="projetos" 
    class="projects-section" 
    :class="{ 'page-blur': isModalOpen }"
  >
    <div class="container">
      <h2 class="section-title">Meus Projetos</h2>
      <p class="section-subtitle">
        Coisas que eu jurei que terminaria (e algumas eu terminei).
      </p>

      <div class="projects-grid">
        <button 
          v-for="project in projectsStore.projects" 
          :key="project.id" 
          class="project-card"
          @click="openModal(project)"
        >
          <div class="project-image-container">
            <img :src="project.imageUrl" :alt="project.title" class="project-image" />
          </div>
          
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </button>
      </div>
    </div>
  </section>

  <Transition name="fade">
    <ProjectModal
      v-if="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useProjectsStore } from '@/stores/projects'
import ProjectModal from '@/components/ProjectModal.vue'

const projectsStore = useProjectsStore()

const isModalOpen = ref(false)
const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedProject.value = null
  }, 300) 
}
</script>

<style scoped>
.projects-section {
  padding: 6rem 0;
  padding-top: 10rem;
  background-color: var(--cor-fundo);
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.projects-section.page-blur {
  filter: blur(5px) brightness(0.8);
  transition: filter 0.3s ease;
}
.projects-section {
  transition: filter 0.3s ease;
}

.project-card {
  display: flex;
  flex-direction: column;
  background-color: var(--cor-glass-bg);
  border: 1px solid var(--cor-glass-border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 0;
  text-align: left;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--cor-laranja-destaque);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}

.project-image-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #2a2a2a;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem;
}

.project-content h3 {
  font-family: var(--fonte-logo-robusta);
  font-size: 1.5rem;
  color: var(--cor-branco-acinzentado);
  margin-bottom: 0.75rem;
}

.project-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--cor-texto-principal);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}
</style>