<script setup lang="ts">
import type { History } from '../use/types'
import { computed, type Ref, ref, watch } from 'vue'
import { init } from '../use/init'
import { useThemeStore } from '@/stores/theme'
import { process } from '../use/process'
import { submit } from '../use/submit'

const theme = computed(() => useThemeStore().theme)
let { answer, answerSheng, answerYun, answerArr } = init()

const answerRef = ref(answer)

const input = ref('')
const { sheng, yun, inputArr } = process(input)
const right = computed(() => inputArr.value.length === answerArr.length)

const done = ref(false)
const history: Ref<History[]> = ref([])
function push() {
  const item = submit(input, { answerSheng, answerYun, answerArr })
  history.value.push(item)
  input.value = ''
  if (item.charactors.every(char => char.isRightChar)) {
    done.value = true
  }
}

function continueGame() {
  ;({ answer, answerSheng, answerYun, answerArr } = init())
  answerRef.value = answer
  done.value = false
  history.value = []
}

function reset() {
  history.value = []
}
</script>

<template>
  <div v-if="done" class="modal">
    <div class="modal-content">
      <div>{{ answerRef }}</div>
      <button @click="continueGame" class="submit-button">NEXT</button>
    </div>
  </div>
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
      @keyup.enter="push"
      :style="{ color: theme === 'light' ? '#333' : '#fff' }"
      class="user-input"
    />
    <div>
      <button @click="reset" class="submit-button">清空</button>
      <button @click="push" :disabled="!right" class="submit-button">
        确定
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000096;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 300px;
  height: 200px;
  background: #f1dfdf;
  color: #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  font-size: 30px;
  letter-spacing: 10px;
}
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
  width: 300px;
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
  margin-inline: 10px;
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
