import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Projects from '../views/ProjectsView.vue'

const views = {
  home: HomeView,
  about: AboutView,
  projects: Projects,
}

export const useNavigationStore = defineStore('navigation', () => {
  const currentViewName = ref('home')
  const activeView = computed(() => views[currentViewName.value])

  function setView(viewName) {
    if (views[viewName]) {
      currentViewName.value = viewName
    } else {
      console.warn(`View "${viewName}" não encontrada. Voltando para Home.`)
      currentViewName.value = 'home'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { currentViewName, activeView, setView }
})