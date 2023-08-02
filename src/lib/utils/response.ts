import { ResponseData } from "../types/response"

export function Response<T extends {}>(ok: boolean, message: string, data: T): ResponseData<T> {
  return { ok, message, data }
}
