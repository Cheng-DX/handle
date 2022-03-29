import { pinyin } from 'pinyin-pro'

function random() {
  const answerList = [
    '吉星高照',
    '班门弄斧',
    '水落石出',
    '巧夺天工',
    '名震天下',
    '武运昌隆',
    '鬼斧神工',
    '擅作主张'
  ]
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
