import { isHexColor } from "../../lib/utils/regex"
import { hexToRgb } from "../../lib/utils/color"
import { error } from "../../lib/utils/error"
import { defaults } from "../../config/role"
import React, { CSSProperties } from "react"
import { Role } from "../../lib/types/role"

export default function Role({ name, color }: Role) {
  if (color && !isHexColor(color)) {
    error(`Invalid hex color provided: ${color}`)
  }

  const bgColor = color ? hexToRgb(color).changeOpacity(0.1).toHexColor() : defaults.color.background
  const hoverColor = hexToRgb(bgColor).changeOpacity(0.3).toHexColor()

  const style: CSSProperties = {
    color: color ? color : defaults.color.text,
    backgroundColor: bgColor
  }

  return (
    <span className="role" style={style} data-hovercolor={hoverColor}>
      <span>@</span>
      <span>{name}</span>
    </span>
  )
}
