export interface Embed {
  title?: string
  url?: string
  description?: string
  color?: string
  author?: {
    name: string
    iconURL?: string
    url?: string
  }
  image?: {
    url: string
  }
  thumbnail?: {
    url: string
  }
  footer?: {
    text: string
    iconURL?: string
  }
  timestamp?: boolean
}
