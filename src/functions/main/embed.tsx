import EmbedComponent from "../../components/elements/embed"
import { Embed as EmbedProps } from "../../lib/types/embed"
import React from "react"

export function Embed(embedData: EmbedProps) {
  return (
    <EmbedComponent embedData={embedData} />
  )
}
