import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const isNoiseEnabled = ref(true)

  function toggleNoise() {
    isNoiseEnabled.value = !isNoiseEnabled.value
  }

  return { isNoiseEnabled, toggleNoise }
})