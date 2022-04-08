import { pinyin } from 'pinyin-pro'
import idioms from '../data/idioms.json'

function random() {
  const answerList = idioms.words
  return answerList[Math.floor(Math.random() * answerList.length)]
}

export function init() {
  const answer = random()
  const answerSheng = pinyin(answer, { pattern: 'initial' }).split(' ')
  const answerYun = pinyin(answer, {
    pattern: 'final',
    toneType: 'none'
  }).split(' ')
  const answerArr = [...answer]
  return {
    answer,
    answerSheng,
    answerYun,
    answerArr
  }
}
