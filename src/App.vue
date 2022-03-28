<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from './stores/theme'
import TheHeader from './components/TheHeader.vue'
import TheMain from './views/TheMain.vue'

const theme = computed(() => useThemeStore().theme)
</script>

<template>
  <div class="root" :class="theme">
    <TheHeader />
    <TheMain />
  </div>
</template>

<style scoped>
.root {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  transition: 0.5s;
  font-family: Berkshire Swash, Helvetica, sans-serif;
}
.light {
  background-color: #fff;
}
.dark {
  background-color: #333;
  color: #fff;
}
</style>
