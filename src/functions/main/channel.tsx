import { Role as RoleProps } from "../../lib/types/role"
import { error } from "../../lib/utils/error"

export function Channel({ name }: RoleProps) {
  if (!name) {
    error("Channel name is required to create a Channel Object")
  }

  const parsedName = name.length > 25 ? `${name.slice(0, 25)}...` : name

  return `ChannelObject(${parsedName})`
}
