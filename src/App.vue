<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useThemeStore } from './stores/theme'
import TheHeader from './components/TheHeader.vue'

const theme = computed(() => useThemeStore().theme)
</script>

<template>
  <div class="root" :class="theme">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style scoped>
.root {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  transition: 0.5s;
  font-family: 'consolas';
}
.light {
  background-color: #fff;
}
.dark {
  background-color: #333;
  color: #fff;
}
</style>
