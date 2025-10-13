<template>
  <section id="sobre" class="timeline-section">
    <div class="container">
      <h2 class="section-title">Minha Trajetória</h2>
      <div class="timeline-wrapper">
        <div 
          v-for="(event, index) in timelineEvents" 
          :key="index" 
          class="timeline-item"
          :ref="el => timelineItemRefs[index] = el"
          :class="{ 'is-current': event.isCurrent }"
          :style="{ 'transition-delay': `${index * 0.2}s` }"
        >
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-year">{{ event.year }}</span>
              <h3 class="timeline-title">{{ event.title }}</h3>
            </div>
            <p class="timeline-description" v-html="event.description"></p>
            
            <div class="timeline-media">
              <div class="icon-wrapper">
                <component :is="icons[event.icon]" :size="32" stroke-width="2" />
              </div>
              <img :src="event.image" :alt="event.title" class="timeline-image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { GraduationCap, BookOpen, Code } from 'lucide-vue-next';

const icons = {
  GraduationCap,
  BookOpen,
  Code
};

const timelineEvents = ref([
  {
    year: '2023 - 2025',
    title: 'Ensino Médio Integrado ao Técnico',
    description: 'Formação geral no Ensino Médio integrada ao curso técnico pela <strong>ETEC Darcy Pereira de Moraes</strong>.',
    image: 'https://unisatc.com.br/wp-content/uploads/2024/08/Formatura-UniSatc-Lucas-Jorge-scaled.jpg',
    icon: 'GraduationCap',
    isCurrent: false
  },
  {
    year: 'Atualmente',
    title: 'Técnico em Desenvolvimento de Sistemas',
    description: 'Foco nos estudos da área técnica na <strong>ETEC</strong>, com aprendizado em <strong>lógica de programação</strong>, <strong>desenvolvimento web</strong> (HTML, CSS, Vue.js) e <strong>banco de dados</strong>.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto-format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG9otby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: 'Code',
    isCurrent: true
  }
]);

const timelineItemRefs = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  timelineItemRefs.value.forEach(item => {
    if (item) {
      observer.observe(item);
    }
  });
});
</script>

<style scoped>
@keyframes pulse-marker {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 140, 66, 0.7);
  }
  100% {
    box-shadow: 0 0 0 14px rgba(255, 140, 66, 0);
  }
}

/* --- NOVAS ANIMAÇÕES PARA AS BOLAS DE LUZ --- */
@keyframes float {
  0% { transform: translate(0, 0); }
  50% { transform: translate(10px, 10px); }
  100% { transform: translate(0, 0); }
}

@keyframes glow {
  0% { opacity: 0.1; }
  50% { opacity: 0.2; }
  100% { opacity: 0.1; }
}


.timeline-section {
  padding: 6rem 0;
  position: relative;
  overflow: hidden; 
}

/* Bolas de luz principais (anteriormente ::before e ::after da section) */
.timeline-section::before,
.timeline-section::after {
  content: '';
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  filter: blur(150px);
  background-color: var(--cor-laranja-destaque);
  animation: float 10s ease-in-out infinite alternate, glow 5s ease-in-out infinite alternate;
}

.timeline-section::before {
  width: 350px;
  height: 350px;
  top: 10%;
  left: -50px;
  opacity: 0.15;
}

.timeline-section::after {
  width: 300px;
  height: 300px;
  bottom: 5%;
  right: -50px;
  opacity: 0.1;
  animation-delay: 2s; /* Para dessincronizar a animação */
}

/* --- NOVOS PONTOS DE LUZ MENORES (USANDO PSEUDO-ELEMENTOS DOS ITENS) --- */
.timeline-item:nth-child(1)::before {
  /* O pseudo-elemento :before já existe para o marcador, então vamos usar um after */
  position: absolute; /* Já é absolute, apenas ajustar */
  left: 16.5px;
  transform: translateX(-50%);
  top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--cor-laranja-destaque);
  border: 4px solid var(--cor-fundo);
  z-index: 1;
}

.timeline-item:nth-child(1)::after,
.timeline-item:nth-child(2)::before { /* Usamos o ::before do segundo item também */
  content: '';
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  filter: blur(100px);
  background-color: rgba(255, 140, 66, 0.1); /* Um pouco mais sutil */
  animation: float 12s ease-in-out infinite alternate, glow 6s ease-in-out infinite alternate;
}

.timeline-item:nth-child(1)::after { /* Bola de luz para o primeiro item */
  width: 200px;
  height: 200px;
  top: 50px;
  right: -100px; /* Posicionada à direita do primeiro item */
  animation-delay: 4s;
}

.timeline-item:nth-child(2)::before { /* Bola de luz para o segundo item */
  width: 250px;
  height: 250px;
  bottom: -50px;
  left: -150px; /* Posicionada à esquerda do segundo item */
  animation-delay: 6s;
}


.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative; 
  z-index: 1;
}


.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: var(--cor-branco-acinzentado);
  font-family: var(--fonte-logo-robusta);
}

.timeline-wrapper {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-wrapper::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 10px;
  bottom: 10px;
  width: 3px;
  background-color: var(--cor-glass-border);
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  padding-left: 60px;
  margin-bottom: 50px;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.timeline-item.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 16.5px;
  transform: translateX(-50%);
  top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--cor-laranja-destaque);
  border: 4px solid var(--cor-fundo);
  z-index: 1;
}

.timeline-item.is-current::before {
  animation: pulse-marker 1.5s infinite;
}

.timeline-content {
  background-color: var(--cor-glass-bg);
  border: 1px solid var(--cor-glass-border);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
}

.timeline-header {
  margin-bottom: 1.5rem;
}

.timeline-year {
  display: inline-block;
  background-color: var(--cor-laranja-destaque);
  color: var(--cor-fundo);
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.timeline-title {
  font-size: 1.5rem;
  color: var(--cor-branco-acinzentado);
  font-family: var(--fonte-logo-robusta);
}

.timeline-description {
  font-size: 1rem;
  color: var(--cor-texto-principal);
  line-height: 1.6;
  margin-bottom: 2rem;
}
.timeline-description :deep(strong) {
  color: var(--cor-laranja-destaque);
  font-weight: 600;
}

.timeline-media {
  position: relative;
}

.timeline-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
}

.icon-wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--cor-fundo);
  color: var(--cor-laranja-destaque);
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--cor-glass-border);
}
</style>