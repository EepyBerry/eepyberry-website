export function random(range: number) {
  return Math.floor(Math.random() * range) + 1
}
export function randomMinMax(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function f_randomMinMax(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function vec_randomUnit() {
  var x = Math.random() * 2 - 1
  var y = Math.random() * 2 - 1
  return vec_normalize(x, y)
}

export function vec_normalize(x: number, y: number) {
  const length = Math.sqrt(x * x + y * y)
  return [x / length, y / length]
}
