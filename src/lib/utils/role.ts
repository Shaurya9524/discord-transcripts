import { Role } from "../types/role"
import { regex } from "./regex"

type MatchedRoleData = { match: string, index: number } & Role

export function getRoleObjectsFromString(content: string) {
  const roleObjects: MatchedRoleData[] = []
  const matches = content.matchAll(regex.roleObject)

  for (const match of matches) {
    const [fullMatch, name, color] = match
    roleObjects.push({
      match: fullMatch,
      index: match.index ?? 0,
      name,
      color
    })
  }

  return roleObjects
}
