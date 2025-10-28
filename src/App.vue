<template>
  <Header />
  
  <main>
    <component :is="navStore.activeView" />
  </main>

  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useNavigationStore } from './stores/navigation'

const navStore = useNavigationStore()

</script>

<style scoped>
</style>