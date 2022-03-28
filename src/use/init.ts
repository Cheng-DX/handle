import { pinyin } from 'pinyin-pro'

function random() {
  return '吉星高照'
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
    answerSheng,
    answerYun,
    answerArr
  }
}
