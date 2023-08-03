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

export function ServerIcon({ guild }: { guild: Guild }) {
  return (
    <div className="server-icon-wrapper" data-guildname={guild.name}>
      <img className="sidebar-icon" src={guild.iconURL} alt={guild.name} />
    </div>
  )
}
