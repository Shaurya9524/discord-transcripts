import { isCorrectOpacity } from "../utils/color"
import { error } from "../utils/error"

export class RGB {
  r: number
  g: number
  b: number
  opacity: number

  constructor(r: number, g: number, b: number, opacity = 1) {
    if (!isCorrectOpacity(opacity)) {
      error(`Invalid opacity provided for the RGB color: ${opacity} (min: 0, max: 1)`)
    }

    this.r = r
    this.g = g
    this.b = b
    this.opacity = opacity
  }

  toHexColor() {
    const { r, g, b, opacity } = this

    const newR = Math.min(255, Math.max(0, r))
    const newG = Math.min(255, Math.max(0, g))
    const newB = Math.min(255, Math.max(0, b))

    const newOpacity = Math.min(1, Math.max(0, opacity))

    const redHex = newR.toString(16).padStart(2, "0")
    const greenHex = newG.toString(16).padStart(2, "0")
    const blueHex = newB.toString(16).padStart(2, "0")
    const opacityHex = Math.round(newOpacity * 255).toString(16).padStart(2, "0")

    let hexColor = `#${redHex}${greenHex}${blueHex}`
    if (newOpacity < 1) {
      hexColor += opacityHex
    }

    return hexColor.toUpperCase()
  }

  changeOpacity(opacity: number) {
    if (!isCorrectOpacity(opacity)) {
      error(`Invalid opacity provided: ${opacity} (min: 0, max: 1)`)
    }

    const { r, g, b } = this
    const newRgb = new RGB(r, g, b, opacity)
    return newRgb
  }
}
