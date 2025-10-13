<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer /> </template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue' // 2. Importe o novo componente
import { watch } from 'vue';
import { useSettingsStore } from './stores/settings';

const settingsStore = useSettingsStore();

watch(() => settingsStore.isNoiseEnabled, (isEnabled) => {
  if (isEnabled) {
    document.body.classList.remove('noise-disabled');
  } else {
    document.body.classList.add('noise-disabled');
  }
}, { immediate: true });
</script>

<style scoped>
</style>