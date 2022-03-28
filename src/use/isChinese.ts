export default function isChinese(str: string): boolean {
  return /^[\u4E00-\u9FA5]+$/.test(str)
}
