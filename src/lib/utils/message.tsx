import RoleComponent from "../../components/utils/role"
import { getRoleObjectsFromContent } from "./role"
import { defaults } from "../../config/role"
import React from "react"

export function resolveContent(content: string) {
  const roleObjects = getRoleObjectsFromContent(content)
  let newContent = content

  for (const roleObj of roleObjects) {
    const { name, color } = roleObj
    const roleObjectString = `RoleObject(${name}${color ? `, ${color}` : `${defaults.color.text}`})`
    const roleComponent = <RoleComponent name={name} color={color} />
    newContent = content.replace(roleObjectString, `${roleComponent}`)
  }

  return newContent
}
