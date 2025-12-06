import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import AboutView from '../views/AboutView.vue'

const views = {
  about: AboutView,
}

export const useNavigationStore = defineStore('navigation', () => {
  const currentViewName = ref('about')
  const activeView = computed(() => views[currentViewName.value])

  function setView(viewName) {
    if (views[viewName]) {
      currentViewName.value = viewName
    } else {
      console.warn(`View "${viewName}" não encontrada. Voltando para About.`)
      currentViewName.value = 'about'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { currentViewName, activeView, setView }
})