import { defineStore } from 'pinia'

export const useNumberStore = defineStore({
  id: 'number',
  state: () => ({
    number: '0000'
  }),
  actions: {
    setNumber(number: string) {
      this.number = number
    }
  }
})
