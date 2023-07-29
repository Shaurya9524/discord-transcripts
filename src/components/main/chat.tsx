import { Wrapper } from "../../functions/utils/wrapper"
import { ChatContent } from "../../lib/types/webpage"
import React from "react"

export default function Chat({ content }: { content: ChatContent }) {
  return (
    <div className="chat">
      {Wrapper(content)}
    </div>
  )
}
