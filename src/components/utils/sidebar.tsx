import { Guild } from "../../lib/types/guild"
import logo from "../../assets/logo"
import React from "react"

export function DMs() {
  return (
    <div className="dms sidebar-icon">
      <img src={logo.discord} alt="DMs" />
    </div>
  )
}

export function Separator() {
  return <span className="dms-servers-seperator" />
}

function DefaultServerIcon({ guild }: { guild: Guild }) {
  return (
    <div className="default-server-icon sidebar-icon">
      {guild.name[0]}
    </div>
  )
}

export function ServerIcon({ guild }: { guild: Guild }) {
  return (
    <div className="server-icon-wrapper" data-guildname={guild.name}>
      {
        guild.iconURL
          ? <img className="sidebar-icon" src={guild.iconURL} alt={guild.name} />
          : <DefaultServerIcon guild={guild} />
      }
    </div>
  )
}
