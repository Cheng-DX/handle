<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '../stores/theme'
import ThemeIcon from './ThemeIcon.vue'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
function changeTheme() {
  themeStore.changeTheme()
}
</script>

<template>
  <div class="the-header">
    <h1 class="title">handle</h1>
    <button class="theme-button" @click="changeTheme">
      <ThemeIcon :theme="theme" />
    </button>
  </div>
</template>

<style scoped>
.the-header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.theme-button {
  position: absolute;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
