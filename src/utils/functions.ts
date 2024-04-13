
export function random(range: number) {
  return Math.floor(Math.random() * range) + 1;
}
export function randomMinMax(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}