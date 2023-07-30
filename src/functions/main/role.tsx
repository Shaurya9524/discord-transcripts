import { Role as RoleProps } from "../../lib/types/role"

export function Role({ name, color }: RoleProps) {
  return `RoleObject(${name}, ${color})`
}
