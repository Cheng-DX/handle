import type { History } from './types'
import type { Ref } from 'vue'
import { process } from './process'
import { CORRECT_COLOR, WRONG_POSITION_COLOR, DEFAULT_COLOR } from './useColors'

export function submit(input: Ref<string>, answer: any) {
  const { answerSheng, answerYun, answerArr } = answer
  const { sheng, yun, inputArr } = process(input)

  let historyItem: History = {
    input: input.value,
    charactors: []
  }
  for (let i = 0; i < inputArr.value.length; i++) {
    let inputSheng = sheng.value[i],
      inputYun = yun.value[i],
      inputChar = inputArr.value[i],
      charColor = DEFAULT_COLOR,
      shengColor = DEFAULT_COLOR,
      yunColor = DEFAULT_COLOR,
      isRightChar = false

    if (inputChar === answerArr[i]) {
      isRightChar = true
      charColor = CORRECT_COLOR
    } else if (answerArr.includes(inputChar)) {
      charColor = WRONG_POSITION_COLOR
    }
    if (inputSheng === answerSheng[i]) {
      shengColor = CORRECT_COLOR
    } else if (answerSheng.includes(inputSheng)) {
      shengColor = WRONG_POSITION_COLOR
    }
    if (inputYun === answerYun[i]) {
      yunColor = CORRECT_COLOR
    } else if (answerYun.includes(inputYun)) {
      yunColor = WRONG_POSITION_COLOR
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
  return historyItem
}
