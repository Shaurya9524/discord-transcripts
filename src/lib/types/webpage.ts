export type WebpageProps = {
  title: string
  data: {
    guild: {
      name: string,
      iconURL?: string
    },
    transcriptChannel: {
      name: string
    }
  }
  content: JSX.Element[]
}
