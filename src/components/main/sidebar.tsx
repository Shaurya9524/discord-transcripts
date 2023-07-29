import { SidebarProps } from "../../lib/types/sidebar"
import { Guild } from "../../lib/types/guild"
import logo from "../../assets/logo"
import React from "react"

export default function Sidebar({ guild }: SidebarProps) {
  function DMs() {
    return (
      <div className="dms sidebar-icon">
        <img src={logo.discord} alt="DMs" />
      </div>
    )
  }

  function Separator() {
    return <span className="dms-servers-seperator" />
  }

  function ServerIcon({ guild }: { guild: Guild }) {
    return <img className="sidebar-icon" src={guild.iconURL} alt={guild.name} />
  }

  return (
    <div className="sidebar">
      <DMs />
      <Separator />
      <ServerIcon guild={guild} />
    </div>
  )
}
