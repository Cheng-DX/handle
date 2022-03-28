import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    theme: 'light'
  }),
  actions: {
    changeTheme() {
      this.theme === 'light' ? (this.theme = 'dark') : (this.theme = 'light')
    }
  }
})
