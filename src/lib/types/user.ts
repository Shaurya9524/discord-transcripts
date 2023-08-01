import { Role } from "./role"

export interface User {
  username: string
  avatarURL?: string
  bot?: boolean
  highestRole?: Role
}
