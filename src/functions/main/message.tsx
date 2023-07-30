import { Message as MessageProps } from "../../lib/types/message"
import { formatDate } from "../../lib/utils/time"
import { error } from "../../lib/utils/error"
import Bot from "../../components/utils/bot"
import React from "react"

export function Message({ user, payload, time }: MessageProps) {
  if (!user || !payload || !time) {
    error("All message data fields (user, payload, time) are required to create the message")
  }

  const { content, embeds, files } = payload

  if (!content && !embeds && !files) {
    error("Any one of the message payload fields (content, embeds, files) are required")
  }

  const messageContents = content && content.length > 0 && content.map((content, i) => {
    return <div key={i} className="message-content">{content}</div>
  })

  return (
    <div className="message">
      <img className="message-user-avatar" src={user.avatarUrl} alt={user.username} />
      <div className="message-contents">
        <div className="message-head">
          <span className="message-username">{user.username}</span>
          {user.bot && <span className="message-bot-tag-wrapper"><Bot /></span>}
          <span className="message-time">{formatDate(time)}</span>
        </div>
        <div className="message-body">
          {messageContents}
        </div>
      </div>
    </div>
  )
}
