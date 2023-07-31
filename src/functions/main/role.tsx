import { Role as RoleProps } from "../../lib/types/role"
import { isHexColor } from "../../lib/utils/regex"
import { error } from "../../lib/utils/error"
import { defaults } from "../../config/role"

export function Role({ name, color }: RoleProps) {
  if (!name) {
    error("Role name is required to create a Role Object")
  }

  if (color && !isHexColor(color)) {
    error(`Invalid hex color provided: ${color}`)
  }

  return `RoleObject(${name}, ${color ? color : defaults.color.text})`
}
