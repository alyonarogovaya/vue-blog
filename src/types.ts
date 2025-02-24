export type Post = {
  id: number
  description: string
  date: string
  imageUrl?: string
}

export type PostForm = {
  text: string
  imageUrl?: string
}
