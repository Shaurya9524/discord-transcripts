import { isHexColor } from "../../lib/utils/regex"
import { hexToRgb } from "../../lib/utils/color"
import { error } from "../../lib/utils/error"
import { defaults } from "../../config/role"
import React, { CSSProperties } from "react"
import { Role } from "../../lib/types/role"

export default function Role({ name, color }: Role) {
  if (!isHexColor) {
    error(`Invalid hex color provided: ${color}`)
  }

  const style: CSSProperties = {
    color: color ? color : defaults.color.text,
    backgroundColor: color ? hexToRgb(color).changeOpacity(0.1).toHexColor() : defaults.color.background
  }

  return <span className="role" style={style}>{name}</span>
}
