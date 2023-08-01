import { Embed as EmbedProps } from "../../lib/types/embed"
import React from "react"

export default function Embed({ embedData }: { embedData: EmbedProps }) {
  const { title } = embedData

  return (
    <div className="embed">
      <div className="embed-title">{title}</div>
    </div>
  )
}
