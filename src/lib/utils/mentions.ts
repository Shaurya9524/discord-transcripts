import { Channel } from "../types/channel"
import { Role } from "../types/role"
import { regex } from "./regex"

export function getChannelMentions(content: string) {
  type MatchedChannelData = { match: string, index: number } & Channel
  const channelMentions: MatchedChannelData[] = []
  const matches = content.matchAll(regex.mention.channel)

  for (const match of matches) {
    const [fullMatch, name] = match
    channelMentions.push({
      match: fullMatch,
      index: match.index ?? 0,
      name
    })
  }

  return channelMentions
}

export function getRoleMentions(content: string) {
  type MatchedRoleData = { match: string, index: number } & Role
  const roleMentions: MatchedRoleData[] = []
  const matches = content.matchAll(regex.mention.role)

  for (const match of matches) {
    const [fullMatch, name, color] = match
    roleMentions.push({
      match: fullMatch,
      index: match.index ?? 0,
      name,
      color
    })
  }

  return roleMentions
}

export function getUserMentions(content: string) {
  type MatchedUserData = { match: string, index: number, username: string }
  const userMentions: MatchedUserData[] = []
  const matches = content.matchAll(regex.mention.user)

  for (const match of matches) {
    const [fullMatch, username] = match
    userMentions.push({
      match: fullMatch,
      index: match.index ?? 0,
      username
    })
  }

  return userMentions
}
