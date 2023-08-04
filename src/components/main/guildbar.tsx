import { Channel } from "../../lib/types/channel"
import { TextChannel } from "../utils/symbols"
import { Guild } from "../../lib/types/guild"
import React from "react"

function GuildChannel({ channel, active }: { channel: Channel, active?: boolean }) {
  return (
    <div className="guild-navbar-guild-channel" style={active ? { backgroundColor: "#35373c" } : {}}>
      <span><TextChannel height={20} width={20} /></span>
      <span>{channel.name}</span>
    </div>
  )
}

export function GuildNavbar({ guild, channel }: { guild: Guild, channel: Channel }) {
  return (
    <div className="guild-navbar">
      <div className="guild-navbar-guild-name">
        {guild.name}
      </div>
      <div className="guild-navbar-guild-channels">
        <GuildChannel channel={channel} active={true} />
      </div>
    </div>
  )
}
