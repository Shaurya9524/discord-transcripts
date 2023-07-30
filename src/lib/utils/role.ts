import { defaults } from "../../config/role"
import { regex } from "./regex"

const { roleObject } = regex

export function getRoleObjectsFromContent(content: string): { name: string, color: string }[] {
  const roleObjects: { name: string, color: string }[] = []

  for (const match of content.matchAll(roleObject)) {
    const [, name, color] = match
    roleObjects.push({ name: name.trim(), color: color ? color.trim() : defaults.color.text })
  }

  return roleObjects
}
