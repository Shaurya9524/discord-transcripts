import { Channel } from "../types/channel"
import { regex } from "./regex"

type MatchedChannelData = { match: string, index: number } & Channel

export function getChannelObjectsFromString(content: string) {
  const channelObjects: MatchedChannelData[] = []
  const matches = content.matchAll(regex.channelObject)

  for (const match of matches) {
    const [fullMatch, name] = match
    channelObjects.push({
      match: fullMatch,
      index: match.index ?? 0,
      name
    })
  }

  return channelObjects
}
