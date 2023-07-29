import { DMs, Separator, ServerIcon } from "../utils/sidebar"
import { SidebarProps } from "../../lib/types/sidebar"
import React from "react"

export default function Sidebar({ guild }: SidebarProps) {
  return (
    <div className="sidebar">
      <DMs />
      <Separator />
      <ServerIcon guild={guild} />
    </div>
  )
}
