<script setup lang="ts">
import { computed, type Ref, ref } from 'vue'
import { pinyin } from 'pinyin-pro'

const answer: string = '吉星高照',
  answerSheng = pinyin(answer, { pattern: 'initial' }).split(' '),
  answerYun = pinyin(answer, { pattern: 'final', toneType: 'none' }).split(' '),
  answerArr = [...answer]

const input = ref('')
const sheng = computed(() => {
  let shengStr = pinyin(input.value, { pattern: 'initial' })
  return shengStr.split(' ')
})
const yun = computed(() => {
  let yunStr = pinyin(input.value, { pattern: 'final', toneType: 'none' })
  return yunStr.split(' ')
})
const inputArr = computed(() => {
  return [...input.value]
})

const correctColor = 'blue',
  wrongPositionColor = 'red',
  otherColor = 'grey'

type History = {
  input: string
  sheng: string[]
  yun: string[]
  inputArr: string[]
  correct: boolean
  wrongPosition: boolean
  other: boolean
}

const history: Ref<History[]> = ref([])

function check() {}
</script>

<template>
  <div class="main-root">
    <div class="content">
      <div v-for="i in 4" class="char-box">
        <div class="pinyin-box">
          <span class="sheng-span">{{ sheng[i - 1] }}</span>
          <span class="yun-span">{{ yun[i - 1] }}</span>
        </div>
        <div class="text-box">{{ inputArr[i - 1] }}</div>
      </div>
    </div>
    <input v-model="input" class="user-input" />
    <div>
      {{ sheng }}
    </div>
    <div>
      {{ yun }}
    </div>
    <div>
      {{ answerSheng }}
    </div>
    <div>
      {{ answerYun }}
    </div>
    <div>
      {{ answerArr }}
    </div>
    <div>
      {{ inputArr }}
    </div>
  </div>
</template>

<style scoped>
.main-root {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.content {
  width: 320px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.char-box {
  height: 80px;
  width: 80px;
  border: 1px solid #ccc;
  margin: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.user-input {
  width: 50%;
  height: 40px;
  margin: 1px;
  background-color: transparent;
  border: none;
  outline: none;
  text-align: center;
}
</style>
