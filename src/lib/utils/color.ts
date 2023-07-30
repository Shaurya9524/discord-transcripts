import { RGB } from "../classes/color"
import { isHexColor } from "./regex"
import { error } from "./error"

export const color = {
  white: "#ffffff"
}

export function hexToRgb(hexColor: string) {
  if (!isHexColor(hexColor)) {
    error(`Invalid hex color provided: ${hexColor}`)
  }

  hexColor = hexColor.replace("#", "").toUpperCase()

  if (hexColor.length === 3) {
    hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2]
  }

  const red = parseInt(hexColor.substring(0, 2), 16)
  const green = parseInt(hexColor.substring(2, 4), 16)
  const blue = parseInt(hexColor.substring(4, 6), 16)

  const rgbColor = new RGB(red, green, blue, 1)

  return rgbColor
}

export function isCorrectOpacity(opacity: number) {
  if (isNaN(opacity) || opacity < 0 || opacity > 1) {
    return false
  } else {
    return true
  }
}
