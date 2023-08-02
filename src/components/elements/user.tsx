import { User } from "../../lib/types/user"
import React from "react"

export default function UserMention({ username }: User) {
  return (
    <span className="user">
      <span>@</span>
      <span>{username}</span>
    </span>
  )
}
