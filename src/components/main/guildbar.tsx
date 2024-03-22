import { Channel } from "../../functions/main/channel"
import { Guild } from "../../functions/main/guild"
import { TextChannel } from "../utils/symbols"
import React from "react"

function GuildChannel({ channel, active }: { channel: Channel, active?: boolean }) {
  const name = channel.data.name

  return (
    <div className="guild-navbar-guild-channel" style={active ? { backgroundColor: "#35373c" } : {}}>
      <span><TextChannel height={20} width={20} /></span>
      <span>{name.length > 20 ? `${name.slice(0, 18)}...` : name}</span>
    </div>
  )
}

export function GuildNavbar({ guild, channel }: { guild: Guild, channel: Channel }) {
  const guildName = guild.data.name

  return (
    <div className="guild-navbar">
      <div className="guild-navbar-guild-name">
        {guildName.length > 20 ? `${guildName.slice(0, 18)}...` : guildName}
      </div>
      <div className="guild-navbar-guild-channels">
        <GuildChannel channel={channel} active={true} />
      </div>
    </div>
  )
}
