<template>
  <main>
    <component :is="navStore.activeView" />
  </main>
</template>

<script setup>
import { useNavigationStore } from './stores/navigation'

const navStore = useNavigationStore()

</script>

<style scoped>
</style>