import { computed, type Ref } from 'vue'
import { pinyin } from 'pinyin-pro'
import isChinese from './isChinese'

function process(input: Ref<string>, size: number = 4) {
  const sheng = computed(() => {
    let shengStr = pinyin(input.value, { pattern: 'initial', nonZh: 'removed' })
    return shengStr.split(' ').splice(0, size)
  })
  const yun = computed(() => {
    let yunStr = pinyin(input.value, {
      pattern: 'final',
      toneType: 'none',
      nonZh: 'removed'
    })
    return yunStr.split(' ').splice(0, size)
  })
  const inputArr = computed(() => {
    return [...input.value].filter(item => isChinese(item)).splice(0, size)
  })

  return { sheng, yun, inputArr }
}

export { process }
