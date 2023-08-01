import { Channel } from "../../lib/types/channel"
import { error } from "../../lib/utils/error"
import React from "react"

export default function Channel({ name }: Channel) {
  if (!name) {
    error("Channel name is required for creating a channel object")
  }

  return (
    <span className="channel">
      <span>#</span>
      <span>{name.toLowerCase()}</span>
    </span>
  )
}
