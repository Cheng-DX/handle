<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { pinyin } from 'pinyin-pro'
import { ref } from 'vue'

const answer: string = '吉星高照',
  answerSheng = pinyin(answer, { pattern: 'initial' }),
  answerYun = pinyin(answer, { pattern: 'final', toneType: 'none' })

const input = ref('')
const sheng = computed(() => {
  let shengStr = pinyin(input.value, { pattern: 'initial' })
  return shengStr.split('')
})
const yun = computed(() =>{
  let yunStr = pinyin(input.value, { pattern: 'final', toneType: 'none' })
  return yunStr.split('')
})

function
</script>

<template>
  <div class="main-root">
    <input v-model="input" />
    <div>
      {{ sheng }}
    </div>
    <div>
      {{ yun }}
    </div>
  </div>
</template>

<style scoped>
.main-root {
  width: 100%;
  height: 100vh;
}
</style>
