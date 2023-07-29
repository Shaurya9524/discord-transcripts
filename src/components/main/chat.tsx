import { ChatContent } from "../../lib/types/webpage"
import Wrapper from "../utils/wrapper"
import React from "react"

export default function Chat({ content }: { content: ChatContent }) {
  return (
    <Wrapper>
      {
        Array.isArray(content)
          ? content.map((element, i) => (
            <Wrapper key={i}>
              {element}
            </Wrapper>
          ))
          : content
      }
    </Wrapper>
  )
}
