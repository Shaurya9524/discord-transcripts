export const regex = {
  hexColor: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}

export function isHexColor(string: string) {
  return regex.hexColor.test(string)
}
