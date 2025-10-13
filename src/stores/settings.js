import { ref } from 'vue'
import { defineStore } from 'pinia'

// Definimos um "store" para guardar as configurações de UI
export const useSettingsStore = defineStore('settings', () => {
  // O estado: por padrão, o ruído está ativado
  const isNoiseEnabled = ref(true)

  // A ação: uma função que inverte o estado atual
  function toggleNoise() {
    isNoiseEnabled.value = !isNoiseEnabled.value
  }

  return { isNoiseEnabled, toggleNoise }
})