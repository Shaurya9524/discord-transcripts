import { Channel } from "../../lib/types/channel"
import React from "react"

export default function ChannelMention({ name }: Channel) {
  return (
    <span className="channel">
      <span>#</span>
      <span>{name.toLowerCase()}</span>
    </span>
  )
}
