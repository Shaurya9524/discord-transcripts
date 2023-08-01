import { Embed as EmbedProps } from "../../lib/types/embed"
import { defaults } from "../../config/embeds"
import React from "react"

export default function Embed({ embedData }: { embedData: EmbedProps }) {
  const { title, color } = embedData
  const parsedColor = color ? color : defaults.color

  return (
    <div className="message-embed">
      <div className="embed-color" style={{ backgroundColor: parsedColor }} />
      <div className="embed-main-content">
        <div className="embed-title">{title}</div>
      </div>
    </div>
  )
}
