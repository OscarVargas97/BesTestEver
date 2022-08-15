
const ConvertToSeconds = (timeInMs = -1) => {
  if (!(timeInMs >= 0) && !(typeof (timeInMs) === 'number')) { return false }
  const second = Math.trunc(timeInMs / 1000)
  const ms = timeInMs - (second * 1000)
  return `${second}s ${ms.toFixed(6)}ms`
}
module.exports = ConvertToSeconds
