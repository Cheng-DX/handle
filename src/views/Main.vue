<script setup lang="ts">
import { computed, type Ref, ref } from 'vue'
import { pinyin } from 'pinyin-pro'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

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

const correctColor = '#5d5fef',
  wrongPositionColor = '#ef5da8',
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
  if (historyItem.charactors.every(item => item.isRightChar)) {
    showSuccessAnimation()
  }
}
</script>

<template>
  <div class="main-root">
    <div>
      <div class="history-list">
        <div v-for="historyItem in history" class="line">
          <div v-for="charItem in historyItem.charactors" class="char-box">
            <div>
              <span :style="{ color: charItem.shengColor }">{{
                charItem.sheng
              }}</span>
              <span :style="{ color: charItem.yunColor }">{{
                charItem.yun
              }}</span>
            </div>
            <div
              :style="{
                color: charItem.charColor
              }"
              class="charactor"
            >
              {{ charItem.character }}
            </div>
          </div>
        </div>
      </div>
      <div class="realtime">
        <div v-for="i in answerArr.length" class="char-box">
          <div>
            <span>{{ sheng[i - 1] }}</span>
            <span>{{ yun[i - 1] }}</span>
          </div>
          <div class="charactor">{{ inputArr[i - 1] }}</div>
        </div>
      </div>
    </div>
    <input
      v-model="input"
      placeholder="输入四字词语..."
      :style="{ color: theme === 'light' ? '#333' : '#fff' }"
      class="user-input"
    />
    <button @click="submit" class="submit-button">确定</button>
  </div>
</template>

<style scoped>
.main-root {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.line {
  width: 320px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.history-list {
  margin-top: 2px;
}
.realtime {
  width: 320px;
  height: 80px;
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.char-box {
  height: 70px;
  width: 75px;
  border: 1px solid #ccc;
  margin: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
}
.charactor {
  font-size: 30px;
}
.user-input {
  width: 306px;
  height: 50px;
  margin-top: 10px;
  text-align: center;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid #ccc;
  outline: none;
}
.submit-button {
  width: 87px;
  height: 40px;
  margin-top: 20px;
  font-size: 16px;
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
