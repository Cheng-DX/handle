<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '../stores/theme'
import ThemeIcon from './ThemeIcon.vue'
import HelpIcon from './HelpIcon.vue'
import { useNumberStore } from '@/stores/number'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)
function changeTheme() {
  themeStore.changeTheme()
}
const numberStore = useNumberStore()
const number = computed(() => numberStore.number)
</script>

<template>
  <div class="header-root">
    <div class="the-header">
      <a class="options-button" href="https://github.com/Cheng-DX/handle">
        <HelpIcon :theme="theme" />
      </a>
      <h1 class="title">{{ `HANDLE ${number}` }}</h1>
      <button class="options-button" @click="changeTheme">
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
  justify-content: space-around;
  position: static;
  top: 0;
}

.options-button {
  float: right;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.options-button.focus {
  background-color: transparent;
}
</style>
