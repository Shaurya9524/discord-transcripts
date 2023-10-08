import { TextChannel, HamburgerMenu } from "../utils/symbols"
import { Wrapper } from "../../functions/utils/wrapper"
import { ChatContent } from "../../lib/types/webpage"
import { Channel } from "../../lib/types/channel"
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
          <span>{channel.name}</span>
        </div>
      </div>
      <div className="chat">
        {Wrapper(content)}
      </div>
    </div>
  )
}
