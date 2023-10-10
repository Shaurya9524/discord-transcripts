import { hexToRgb } from "../../lib/utils/color"
import React, { CSSProperties } from "react"
import { defaults } from "../../config/role"
import { Role } from "../../lib/types/role"

export default function RoleMention({ name, color }: Role) {
  const bgColor = color ? hexToRgb(color).changeOpacity(0.1).toHexColor() : defaults.color.background

  const style: CSSProperties = {
    color: color ? color : defaults.color.text,
    backgroundColor: bgColor
  }

  return (
    <span className="role" style={style}>
      <span>@</span>
      <span>{name}</span>
    </span>
  )
}
