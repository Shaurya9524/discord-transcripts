import RoleComponent from "../../components/utils/role"
import { getRoleObjectsFromString } from "./role"
import React from "react"

export function resolveContentForRoleObjects(content: string) {
  const roleObjectsData = getRoleObjectsFromString(content)

  if (roleObjectsData.length === 0) {
    return content
  }

  const parts: (string | JSX.Element)[] = []
  let lastIndex = 0
  const entries = roleObjectsData.entries()

  for (const [elementIndex, data] of entries) {

    const { match, index, name, color } = data
    const component = <RoleComponent key={`${name}-${color}`} name={name} color={color} />

    parts.push(content.slice(lastIndex, index))
    parts.push(component)
    lastIndex = index + match.length

    if (elementIndex === roleObjectsData.length - 1) {
      parts.push(content.slice(lastIndex, content.length))
    }
  }

  return parts
}
