import { User } from "../../lib/types/user"

export function UserMention({ username }: User) {
  return `UserMention(${username})`
}
