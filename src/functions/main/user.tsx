import { User } from "../../lib/types/user"

export function UserMention(user: User) {
  const { username } = user

  return `UserMention(${username})`
}
