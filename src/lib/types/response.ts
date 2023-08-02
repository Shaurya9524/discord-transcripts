export type ResponseData<T extends {}> = {
  ok: boolean
  message: string
  data: T
}
