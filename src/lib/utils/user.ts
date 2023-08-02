import { regex } from "./regex"

type MatchedUserData = { match: string, index: number, username: string }

export function getUserObjectsFromString(content: string) {
  const userObjects: MatchedUserData[] = []
  const matches = content.matchAll(regex.userObject)

  for (const match of matches) {
    const [fullMatch, username] = match
    userObjects.push({
      match: fullMatch,
      index: match.index ?? 0,
      username
    })
  }

  return userObjects
}
