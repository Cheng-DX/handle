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
  return shengStr.split(' ').splice(0, answerSheng.length)
})
const yun = computed(() => {
  let yunStr = pinyin(input.value, { pattern: 'final', toneType: 'none' })
  return yunStr.split(' ').splice(0, answerYun.length)
})
const inputArr = computed(() => {
  return [...input.value].splice(0, answerArr.length)
})

const correctColor = 'blue',
  wrongPositionColor = 'red',
  defaultColor = 'grey'

type CharacterItem = {
  character: string
  charColor: string
  sheng: string
  shengColor: string
  yun: string
  yunColor: string
  isRightChar: boolean
}
type History = {
  input: string
  charactors: CharacterItem[]
}
const history: Ref<History[]> = ref([])
function submit() {
  let historyItem: History = {
    input: input.value,
    charactors: []
  }
  for (let i = 0; i < inputArr.value.length; i++) {
    let inputSheng = sheng.value[i],
      inputYun = yun.value[i],
      inputChar = inputArr.value[i],
      charColor = defaultColor,
      shengColor = defaultColor,
      yunColor = defaultColor,
      isRightChar = false

    if (inputChar === answerArr[i]) {
      isRightChar = true
      charColor = correctColor
    } else if (answerArr.includes(inputChar)) {
      charColor = wrongPositionColor
    }
    if (inputSheng === answerSheng[i]) {
      shengColor = correctColor
    } else if (answerSheng.includes(inputSheng)) {
      shengColor = wrongPositionColor
    }
    if (inputYun === answerYun[i]) {
      yunColor = correctColor
    } else if (answerYun.includes(inputYun)) {
      yunColor = wrongPositionColor
    }
    historyItem.charactors.push({
      character: inputChar,
      charColor,
      sheng: inputSheng,
      shengColor,
      yun: inputYun,
      yunColor,
      isRightChar
    })
  }
  history.value.push(historyItem)
}
</script>

<template>
  <div class="main-root">
    <div v-for="historyItem in history" class="history-list">
      <div class="content">
        <div v-for="charItem in historyItem.charactors" class="char-box">
          <div class="pinyin-box">
            <span class="sheng-span" :style="{ color: charItem.shengColor }">{{
              charItem.sheng
            }}</span>
            <span class="yun-span" :style="{ color: charItem.yunColor }">{{
              charItem.yun
            }}</span>
          </div>
          <div
            class="text-box"
            :style="{
              color: charItem.charColor
            }"
          >
            {{ charItem.character }}
          </div>
        </div>
      </div>
    </div>
    <input v-model="input" class="user-input" />
    <button @click="submit" class="submit-button">SUBMIT</button>
    <div v-if="false">
      {{ history }}
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
  width: 60%;
  height: 40px;
  margin: 1px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  outline: 1px solid #ccc;
  text-align: center;
}
.submit-button {
  width: 100px;
  height: 30px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
.submit-button:hover {
  background-color: #ccc;
  transition: 0.5s;
}
</style>
