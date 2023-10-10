import { Role } from "../../functions/main/role"

export interface User {
  username: string
  avatarURL?: string
  bot?: boolean
  highestRole?: Role
}
