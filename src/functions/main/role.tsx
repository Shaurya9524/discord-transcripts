import { Role as RoleProps } from "../../lib/types/role"
import { isHexColor } from "../../lib/utils/regex"
import { error } from "../../lib/utils/error"
import { defaults } from "../../config/role"

export class Role {
  data: RoleProps

  constructor(data: RoleProps) {
    if (!data) {
      error("Role data is required to create the role object")
    }

    const { name } = data
    const color = data.color || defaults.color.text

    if (!name) {
      error("Role name is required to create the role object")
    }

    if (!isHexColor(color)) {
      error(`Invalid hex color provided for role object: ${color}`)
    }

    this.data = data
  }

  mention() {
    const { name, color } = this.data
    const parsedName = name.length > 25 ? `${name.slice(0, 25)}...` : name
    return `RoleMention(${parsedName}, ${color})`
  }
}
