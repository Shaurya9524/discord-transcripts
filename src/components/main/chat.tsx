import { TextChannel, HamburgerMenu } from "../utils/symbols"
import { Wrapper } from "../../functions/utils/wrapper"
import { Channel } from "../../functions/main/channel"
import { ChatContent } from "../../lib/types/webpage"
import React from "react"

export default function Chat({ content, channel }: { content: ChatContent, channel: Channel }) {
  return (
    <div className="chat-wrapper">
      <div className="chat-head">
        <div className="sidebar-toggle-menu" id="mobile-sidebar-toggle-menu">
          <HamburgerMenu />
        </div>
        <div className="chat-channel">
          <span><TextChannel /></span>
          <span>{channel.data.name}</span>
        </div>
      </div>
      <div className="chat">
        {Wrapper(content)}
      </div>
    </div>
  )
}
