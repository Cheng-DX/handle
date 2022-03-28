<script setup lang="ts">
import type { History, CharacterItem } from '@/use/types'
import { computed, type Ref, ref } from 'vue'
import { pinyin } from 'pinyin-pro'
import {
  correctColor,
  wrongPositionColor,
  defaultColor
} from '../use/useColors'
import { useThemeStore } from '@/stores/theme'
import { process } from '../use/process'

const theme = computed(() => useThemeStore().theme)
const answer: string = '吉星高照',
  answerSheng = pinyin(answer, { pattern: 'initial' }).split(' '),
  answerYun = pinyin(answer, { pattern: 'final', toneType: 'none' }).split(' '),
  answerArr = [...answer]

const input = ref('')
const { sheng, yun, inputArr } = process(input)
const right = computed(() => inputArr.value.length === answerArr.length)

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
  input.value = ''
  if (historyItem.charactors.every(item => item.isRightChar)) {
    alert('恭喜你，答对了！')
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
    <button @click="submit" :disabled="!right" class="submit-button">
      确定
    </button>
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
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #0d818eb7;
  color: #fff;
}
.submit-button:hover {
  transition: 0.2s;
  background-color: #10a8b9d7;
}
.submit-button:disabled {
  background-color: #4b5563;
}
</style>
