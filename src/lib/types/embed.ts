export interface Embed {
  title: string
  url?: string
  description?: string
  color?: string
  author?: {
    icon_url: string
    name: string
    icon?: string
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
    icon?: string
  }
  timestamp?: boolean
}
