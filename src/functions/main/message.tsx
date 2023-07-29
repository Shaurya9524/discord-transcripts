import { Message as MessageProps } from "../../lib/types/message"
import { formatDate } from "../../lib/utils/time"
import { error } from "../../lib/utils/error"
import React from "react"

export function Message({ user, payload, time }: MessageProps) {
  if (!user || !payload || !time) {
    error("All message data fields (user, payload, time) are required to create the message")
  }

  const { content, embeds, files } = payload

  if (!content && !embeds && !files) {
    error("Any one of the message payload fields (content, embeds, files) are required")
  }

  return (
    <div className="message">
      <img className="message-user-avatar" src={user.avatarUrl} alt={user.username} />
      <div className="message-contents">
        <div className="message-head">
          <h4>{user.username}</h4>
          <span>{formatDate(time)}</span>
        </div>
        <div className="message-body">
          {content && content}
        </div>
      </div>
    </div>
  )
}
