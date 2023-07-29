import logo from "../../assets/logo"
import React from "react"
import { Guild } from "../../lib/types/guild"

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
  return <img className="sidebar-icon" src={guild.iconURL} alt={guild.name} />
}
