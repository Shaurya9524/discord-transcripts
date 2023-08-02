import { Embed as EmbedProps } from "../../lib/types/embed"
import { defaults } from "../../config/embeds"
import React from "react"
import { formatDate } from "../../lib/utils/time"

export default function Embed({ embedData }: { embedData: EmbedProps }) {
  const { author, title, url, color, description, image, footer, timestamp } = embedData
  const parsedColor = color ? color : defaults.color

  const embedAuthorName = author && <div className="embed-author-name">{author.name}</div>
  const embedAuthor = author && (
    <div className="embed-author">
      {author.iconURL && <img className="embed-author-icon" src={author.iconURL} alt={author.name} />}
      {
        author.url
          ? <a href={author.url} className="embed-author-url">{embedAuthorName}</a>
          : embedAuthorName
      }
    </div>
  )

  const embedTitle = title && <div className="embed-title">{url ? <a href={url}>{title}</a> : title}</div>

  const embedDescription = description && <div className="embed-description">{description}</div>

  const embedImage = image && <img className="embed-image" src={image.url} alt="embed-image" />

  const embedFooter = footer && (
    <div className="embed-footer">
      {footer?.iconURL && <img className="embed-footer-icon" src={footer.iconURL} alt={footer.text} />}
      <div className="embed-footer-text">{footer?.text}</div>
    </div>
  )

  const embedTimestamp = timestamp && (
    <div className="embed-timestamp">{formatDate(new Date())}</div>
  )

  const embedBottom = (footer || timestamp) && (
    <div className="embed-bottom">
      {embedFooter}
      {footer && timestamp && <span>•</span>}
      {embedTimestamp}
    </div>
  )

  return (
    <div className="message-embed">
      <div className="embed-color" style={{ backgroundColor: parsedColor }} />
      <div className="embed-main-content">
        {embedAuthor}
        {embedTitle}
        {embedDescription}
        {embedImage}
        {embedBottom}
      </div>
    </div>
  )
}
