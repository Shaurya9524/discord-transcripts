export const regex = {
  hexColor: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  roleObject: /RoleObject\(([^),]+)(?:,\s*([^)]+))?\)/g,
  channelObject: /^ChannelObject\([a-zA-Z0-9_-]+\)$/g,
}

export function isHexColor(string: string) {
  return regex.hexColor.test(string)
}

export function isRoleObject(string: string) {
  return regex.roleObject.test(string)
}

export function isChannelObject(string: string) {
  return regex.channelObject.test(string)
}
