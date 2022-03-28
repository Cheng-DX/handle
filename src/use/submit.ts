import type { History } from './types'
import type { Ref } from 'vue'
import { process } from './process'
import { correctColor, wrongPositionColor, defaultColor } from './useColors'

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
  return historyItem
}
