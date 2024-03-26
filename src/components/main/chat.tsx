import { TextChannel, HamburgerMenu, MembersIcon } from "../utils/symbols"
import { Wrapper } from "../../functions/utils/wrapper"
import { Channel } from "../../functions/main/channel"
import { ChatContent } from "../../lib/types/webpage"
import Membersbar from "./membersbar"
import React from "react"

export default function Chat({ content, channel }: { content: ChatContent, channel: Channel }) {
  const channelName = channel.data.name

  return (
    <div className="chat-wrapper">
      <div className="chat-head">
        <div className="sidebar-toggle-menu" id="mobile-sidebar-toggle-menu">
          <HamburgerMenu />
        </div>
        <div className="chat-channel">
          <span><TextChannel /></span>
          <span>{channelName.length > 100 ? channelName.slice(0, 100) : channelName}</span>
        </div>
        <div className="chat-head-options">
          <div id="chat-head-members-icon" aria-expanded="false">
            <MembersIcon />
          </div>
        </div>
      </div>
      <div className="chat-body">
        <div className="chat">
          {Wrapper(content)}
        </div>
        <Membersbar />
      </div>
    </div>
  )
}
