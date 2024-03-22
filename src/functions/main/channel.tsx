import { Channel as ChannelProps } from "../../lib/types/channel"
import { error } from "../../lib/utils/error"

export class Channel {
  data: ChannelProps

  constructor(data: ChannelProps) {
    if (!data) {
      error("Channel data is required to create the channel object")
    }

    const { name } = data

    if (!name) {
      error("Channel name is required to create the channel object")
    }

    if (name.length > 100) {
      error("Channel name must be less than 100 characters")
    }

    this.data = data
  }

  mention() {
    const name = this.data.name
    const parsedName = name.length > 25 ? `${name.slice(0, 25)}...` : name
    return `ChannelMention(${parsedName})`
  }
}
