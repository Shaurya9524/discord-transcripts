export const regex = {
  url: /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b/,
  imageUrl: /https?:\/\/(?:www\.)?[\w-]+(?:\.[\w-]+)+[\w.,@?^=%&:/~+#-]*\.(?:png|jpg|jpeg|webp)/,
  hexColor: /^#?([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{4}|[a-f0-9]{3})$/i,
  roleObject: /RoleObject\(([^),]+)(?:,\s*([^)]+))?\)/g,
  channelObject: /ChannelObject\(([a-zA-Z0-9_-]+)\)$/g
}

export function isURL(str: string) {
  return regex.url.test(str)
}

export function isImageURL(str: string) {
  return regex.imageUrl.test(str)
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
