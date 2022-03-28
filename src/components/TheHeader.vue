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
  <div class="header-root">
    <div class="the-header">
      <button class="theme-button" @click="changeTheme">
        <ThemeIcon :theme="theme" />
      </button>
      <h1 class="title">handle</h1>
      <button class="theme-button" @click="changeTheme">
        <ThemeIcon :theme="theme" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.header-root {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.the-header {
  width: 400px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: static;
  top: 0;
}
.theme-button {
  float: right;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
