import { Role } from "./role"

export interface User {
  username: string
  avatarUrl?: string
  bot?: boolean
  highestRole?: Role
}
