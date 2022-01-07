let i = 0
let timer
export function timedCount() {
  i = i + 1
  postMessage(i)
  timer = setTimeout(timedCount, 500)
  if (i > 1) {
    clearTimeout(timer)
  }
}

timedCount()
