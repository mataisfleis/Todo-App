const dataPath = 'todoAppData'

export function saveData (data) {
  window.localStorage.setItem(dataPath, JSON.stringify(data))
}

export function getData () {
  return window.localStorage.getItem(dataPath)
}
