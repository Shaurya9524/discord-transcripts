export const regex = {
  url: /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b/,
  imageUrl: /https?:\/\/(?:www\.)?[\w-]+(?:\.[\w-]+)+[\w.,@?^=%&:/~+#-]*\.(?:png|jpg|jpeg|webp)/,
  hexColor: /^#?([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{4}|[a-f0-9]{3})$/i,
  mention: {
    role: /RoleMention\(([^),]+|[\p{Emoji}])(?:,\s*([^)]+))?\)/gu,
    channel: /ChannelMention\(([^()]+|[\p{Emoji}])\)/gu,
    user: /UserMention\(([^()]+|[\p{Emoji}])\)/gu
  }
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

export function isRoleMention(string: string) {
  return regex.mention.role.test(string)
}

export function isChannelMention(string: string) {
  return regex.mention.channel.test(string)
}

export function isUserMention(string: string) {
  return regex.mention.user.test(string)
}
