import ChannelComponent from "../../components/utils/channel"
import RoleComponent from "../../components/utils/role"
import { getChannelObjectsFromString } from "./channel"
import { getRoleObjectsFromString } from "./role"
import React from "react"

function resolveContentForRoles(content: string) {
  const roleObjectsData = getRoleObjectsFromString(content)

  if (roleObjectsData.length === 0) {
    return [content]
  }

  const parts: (string | JSX.Element)[] = []
  let lastIndex = 0
  const entries = roleObjectsData.entries()

  for (const [elementIndex, data] of entries) {

    const { match, index, name, color } = data
    const component = <RoleComponent key={`${name}-${color}`} name={name} color={color} />

    parts.push(content.slice(lastIndex, index))
    parts.push(component)
    lastIndex = index + match.length

    if (elementIndex === roleObjectsData.length - 1) {
      parts.push(content.slice(lastIndex, content.length))
    }
  }

  return parts
}

function resolveContentForchannels(content: string) {
  const channelObjectsData = getChannelObjectsFromString(content)

  if (channelObjectsData.length === 0) {
    return [content]
  }

  const parts: (string | JSX.Element)[] = []
  let lastIndex = 0
  const entries = channelObjectsData.entries()

  for (const [elementIndex, data] of entries) {

    const { match, index, name } = data
    const component = <ChannelComponent key={`${name}-${elementIndex}`} name={name} />

    parts.push(content.slice(lastIndex, index))
    parts.push(component)
    lastIndex = index + match.length

    if (elementIndex === channelObjectsData.length - 1) {
      parts.push(content.slice(lastIndex, content.length))
    }
  }

  return parts
}

export function resolveContent(content: string) {
  let parsedContent = content

  // parsedContent = resolveContentForRoles(parsedContent)
  // parsedContent = resolveContentForchannels(parsedContent)

  return parsedContent
}
