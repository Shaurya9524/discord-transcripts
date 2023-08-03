export type AdditionalFields<T extends string> = Record<T, string>

export type Mentions<T extends string> = {
  match: string
  index: number
} & AdditionalFields<T>
