import { isHexColor } from "../../lib/utils/regex"
import { error } from "../../lib/utils/error"
import { defaults } from "../../config/role"
import { Role } from "../../lib/types/role"

export function RoleMention({ name, color }: Role) {
  if (!name) {
    error("Role name is required to create a role mention")
  }

  if (color && !isHexColor(color)) {
    error(`Invalid hex color provided: ${color}`)
  }

  return `RoleMention(${name}, ${color ? color : defaults.color.text})`
}
