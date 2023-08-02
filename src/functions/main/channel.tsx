import { Channel } from "../../lib/types/channel"
import { error } from "../../lib/utils/error"

export function ChannelMention({ name }: Channel) {
  if (!name) {
    error("Channel name is required to create a channel mention")
  }

  const parsedName = name.length > 25 ? `${name.slice(0, 25)}...` : name

  return `ChannelMention(${parsedName})`
}
