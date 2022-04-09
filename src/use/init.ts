import { pinyin } from 'pinyin-pro'
import idioms from '../data/idioms.json'

function random() {
  const answerList = idioms.words
  const num = Math.floor(Math.random() * answerList.length)
  return answerList[num]
}

export function init() {
  const answerList = idioms.words
  const num = Math.floor(Math.random() * answerList.length)
  const answer = answerList[num]
  const answerSheng = pinyin(answer, { pattern: 'initial' }).split(' ')
  const answerYun = pinyin(answer, {
    pattern: 'final',
    toneType: 'none'
  }).split(' ')
  const answerArr = [...answer]
  let stringNum = num.toString()
  const len = stringNum.length
  for (let i = 0; i < 4 - len; i++) {
    stringNum = '0' + stringNum
  }
  return {
    answer,
    answerSheng,
    answerYun,
    answerArr,
    stringNum
  }
}
